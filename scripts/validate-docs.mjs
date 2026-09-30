// Validates documentation content before build.
// Catches the mistakes that most often break translation PRs:
//   1. Broken relative paths (imports, hero images) - the classic "copied from
//      English but the file lives one folder deeper" bug
//   2. Missing version/lastUpdated frontmatter (breaks the translation status page)
//   3. Orphaned translations (translated file with no English counterpart)
//   4. Sidebar drift: slugs with no English page, English pages missing from the
//      sidebar, and translation keys that are not a known locale
//
// Exits non-zero with a readable report if anything fails. On GitHub Actions the
// report (plus per-locale translation coverage) is also written to the job summary.

import { readFileSync, existsSync, readdirSync, statSync, appendFileSync } from 'node:fs';
import { join, dirname, resolve, relative, sep } from 'node:path';
import { LOCALES, translationLocales } from '../src/lib/locales.mjs';
import { sidebarTopics } from '../src/lib/sidebar.mjs';

const DOCS_DIR = resolve('src/content/docs');

const errors = [];
const warnings = [];

function walk(dir) {
	const files = [];
	for (const entry of readdirSync(dir)) {
		const full = join(dir, entry);
		if (statSync(full).isDirectory()) {
			files.push(...walk(full));
		} else if (/\.(md|mdx)$/.test(entry)) {
			files.push(full);
		}
	}
	return files;
}

function relPath(file) {
	return relative(process.cwd(), file).split(sep).join('/');
}

function parseFrontmatter(content) {
	const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);
	return match ? match[1] : null;
}

/** "web-docs/vtc/creating.mdx" -> "web-docs/vtc/creating", "game-docs/index.mdx" -> "game-docs" */
function toSlug(docPath) {
	return docPath.replace(/\.(md|mdx)$/, '').replace(/(^|\/)index$/, '');
}

const allFiles = walk(DOCS_DIR);

// version per file, for cross-locale comparison after the per-file checks
const versions = new Map();

for (const file of allFiles) {
	const content = readFileSync(file, 'utf-8');
	const rel = relPath(file);
	const fileDir = dirname(file);

	// --- Check 1: frontmatter fields ---
	const frontmatter = parseFrontmatter(content);
	if (!frontmatter) {
		errors.push(`${rel}: missing frontmatter block`);
		continue;
	}
	if (!/^title:/m.test(frontmatter)) {
		errors.push(`${rel}: missing "title" in frontmatter`);
	}
	if (!/^lastUpdated:/m.test(frontmatter)) {
		errors.push(`${rel}: missing "lastUpdated" in frontmatter (required for the translation status page)`);
	}
	const versionMatch = frontmatter.match(/^version:\s*["']?([^\s"']+)/m);
	if (!versionMatch) {
		errors.push(`${rel}: missing "version" in frontmatter (used to compare translations against the English page)`);
	} else {
		versions.set(relative(DOCS_DIR, file).split(sep).join('/'), versionMatch[1]);
	}

	// --- Check 2: relative paths resolve ---
	// ESM imports: import X from '../../foo'
	const importPattern = /^import\s+.*?from\s+['"](\.[^'"]+)['"]/gm;
	// Frontmatter/asset refs: file: ../../foo.svg, src="../foo.png"
	const assetPattern = /(?:file:\s*|src=["'])(\.[^\s"']+)/g;

	const refs = [];
	for (const m of content.matchAll(importPattern)) refs.push(m[1]);
	for (const m of content.matchAll(assetPattern)) refs.push(m[1]);

	for (const ref of refs) {
		const target = resolve(fileDir, ref);
		// Imports may omit the extension
		const candidates = [target, `${target}.ts`, `${target}.js`, `${target}.mjs`, `${target}.astro`];
		if (!candidates.some((c) => existsSync(c))) {
			errors.push(`${rel}: broken relative path "${ref}" (resolves to ${relPath(target)}, which does not exist)`);
		}
	}

	// --- Check 3: orphaned translations ---
	const relFromDocs = relative(DOCS_DIR, file).split(sep).join('/');
	const firstSegment = relFromDocs.split('/')[0];
	if (LOCALES.includes(firstSegment)) {
		const englishPath = join(DOCS_DIR, relFromDocs.split('/').slice(1).join('/'));
		if (!existsSync(englishPath)) {
			errors.push(`${rel}: no English counterpart at ${relPath(englishPath)} (orphaned translation)`);
		}
	}
}

// --- Check 4: translation version drift (informational) ---
const outdated = [];
for (const [docPath, version] of versions) {
	const firstSegment = docPath.split('/')[0];
	if (!LOCALES.includes(firstSegment)) continue;
	const englishPath = docPath.split('/').slice(1).join('/');
	const englishVersion = versions.get(englishPath);
	if (englishVersion && version !== englishVersion) {
		outdated.push({ locale: firstSegment, page: englishPath, version, englishVersion });
		warnings.push(
			`src/content/docs/${docPath}: version ${version} differs from English (${englishVersion}) - will show as outdated on the status page`
		);
	}
}

// --- Check 5: sidebar (src/lib/sidebar.mjs) ---
const englishDocs = allFiles
	.map((file) => relative(DOCS_DIR, file).split(sep).join('/'))
	.filter((docPath) => !LOCALES.includes(docPath.split('/')[0]));
const englishSlugs = new Map(englishDocs.map((docPath) => [toSlug(docPath), docPath]));

// Translation keys are BCP-47 tags: a locale's `lang`. Topic labels also carry `en`.
const translationLangs = new Set(Object.values(translationLocales).map((l) => l.lang));
const topicLabelLangs = new Set(['en', ...translationLangs]);

const sidebarSlugs = new Set();

function checkKeys(where, record, allowed) {
	for (const key of Object.keys(record)) {
		if (!allowed.has(key)) {
			errors.push(`sidebar ${where}: unknown locale "${key}" (expected one of ${[...allowed].join(', ')})`);
		}
	}
}

function checkSlug(where, slug) {
	sidebarSlugs.add(slug);
	if (!englishSlugs.has(slug)) {
		errors.push(`sidebar ${where}: slug "${slug}" has no English page in src/content/docs/`);
	}
}

function checkItems(items, trail) {
	for (const item of items) {
		const label = typeof item === 'string' ? item : item.label;
		const where = `${trail} > "${label}"`;
		if (typeof item === 'string') {
			checkSlug(where, item);
			continue;
		}
		if (item.translations) checkKeys(where, item.translations, translationLangs);
		if (item.slug) checkSlug(where, item.slug);
		if (item.items) checkItems(item.items, where);
		if (item.autogenerate) {
			const dir = item.autogenerate.directory.replace(/^\/|\/$/g, '');
			for (const slug of englishSlugs.keys()) {
				if (slug === dir || slug.startsWith(`${dir}/`)) sidebarSlugs.add(slug);
			}
		}
	}
}

for (const topic of sidebarTopics) {
	const name = typeof topic.label === 'string' ? topic.label : topic.label.en;
	const where = `topic "${name}"`;
	if ('translations' in topic) {
		errors.push(
			`sidebar ${where}: topics do not support "translations" (ignored by starlight-sidebar-topics); use label: { en: "...", fr: "..." }`
		);
	}
	if (typeof topic.label === 'object') checkKeys(where, topic.label, topicLabelLangs);
	// Topic links to local pages are slugs; external links are full URLs.
	if (topic.link && !/^https?:\/\//.test(topic.link)) {
		const slug = topic.link.replace(/^\/|\/$/g, '');
		if (!englishSlugs.has(slug)) errors.push(`sidebar ${where}: link "${topic.link}" has no English page`);
	}
	if (topic.items) checkItems(topic.items, where);
}

for (const [slug, docPath] of englishSlugs) {
	if (slug === '') continue; // homepage
	if (!sidebarSlugs.has(slug)) {
		errors.push(`src/content/docs/${docPath}: not in the sidebar (add slug "${slug}" to src/lib/sidebar.mjs)`);
	}
}

// --- Report ---
if (warnings.length > 0) {
	console.log(`\n${warnings.length} warning(s):`);
	for (const w of warnings) console.log(`  WARN  ${w}`);
}

if (errors.length > 0) {
	console.error(`\n${errors.length} error(s):`);
	for (const e of errors) console.error(`  FAIL  ${e}`);
}

if (process.env.GITHUB_STEP_SUMMARY) {
	appendFileSync(process.env.GITHUB_STEP_SUMMARY, buildSummary());
}

if (errors.length > 0) {
	console.error('\nDocs validation failed.');
	process.exit(1);
}

console.log(`\nDocs validation passed: ${allFiles.length} files checked, 0 errors, ${warnings.length} warning(s).`);

// Markdown for the GitHub Actions job summary.
function buildSummary() {
	const lines = ['## Docs validation', ''];
	lines.push(
		errors.length > 0
			? `❌ **${errors.length} error(s)** in ${allFiles.length} files.`
			: `✅ ${allFiles.length} files checked, no errors.`,
		''
	);

	if (errors.length > 0) {
		lines.push('### Errors', '');
		for (const e of errors) lines.push(`- ${e}`);
		lines.push('');
	}

	lines.push('### Translation coverage', '');
	lines.push('| Locale | Translated | Outdated | Missing |', '| --- | ---: | ---: | ---: |');
	for (const locale of LOCALES) {
		const translated = englishDocs.filter((docPath) => existsSync(join(DOCS_DIR, locale, docPath))).length;
		const outdatedCount = outdated.filter((o) => o.locale === locale).length;
		lines.push(
			`| ${translationLocales[locale].englishName} (\`${locale}\`) | ${translated}/${englishDocs.length} | ${outdatedCount} | ${englishDocs.length - translated} |`
		);
	}
	lines.push('');

	if (outdated.length > 0) {
		lines.push('<details><summary>Outdated translations</summary>', '');
		lines.push('| Page | Locale | Translation | English |', '| --- | --- | --- | --- |');
		for (const o of outdated) lines.push(`| \`${o.page}\` | \`${o.locale}\` | ${o.version} | ${o.englishVersion} |`);
		lines.push('', '</details>', '');
	}

	return `${lines.join('\n')}\n`;
}
