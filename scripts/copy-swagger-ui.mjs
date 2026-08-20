// Copies the swagger-ui-dist static assets needed by the Swagger UI "Doc"
// page into /public so they are served as static files and stay in sync with
// the installed swagger-ui-dist version.
import { copyFileSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const srcDir = join(root, 'node_modules', 'swagger-ui-dist');
const outDir = join(root, 'public', 'swagger-ui-dist');

mkdirSync(outDir, { recursive: true });

for (const file of ['swagger-ui-bundle.js', 'swagger-ui.css', 'oauth2-redirect.html']) {
	copyFileSync(join(srcDir, file), join(outDir, file));
}

console.log('Copied swagger-ui-dist assets to public/swagger-ui-dist');
