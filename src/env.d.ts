// Starlight's virtual component modules are only typed in its internal
// declarations; declare the one our Sidebar override uses.
declare module 'virtual:starlight/components/MobileMenuFooter' {
	const MobileMenuFooter: typeof import('@astrojs/starlight/components/MobileMenuFooter.astro').default;
	export default MobileMenuFooter;
}
