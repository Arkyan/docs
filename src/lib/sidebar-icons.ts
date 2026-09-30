import type { StarlightIcon } from '@astrojs/starlight/types';

export const sidebarGroupIcons: Record<string, StarlightIcon> = {
	'VTC Programs': 'approve-check-circle',
	'VTC Guides': 'setting',
	'Discord Bot': 'external',
	'Account Guides': 'padlock',
	'Contribute': 'open-book',
};

export function getSidebarGroupIcon(label: string): StarlightIcon | undefined {
	return sidebarGroupIcons[label];
}
