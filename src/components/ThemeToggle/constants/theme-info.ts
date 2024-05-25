import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";

import { AvailableThemes } from "_styles/themes/available-themes";

export type ThemeInfo = {
	icon: typeof SunIcon;
	translationKeys: {
		name: string;
		ariaLabel: string;
	};
};

export const THEME_INFO: Record<string, ThemeInfo> = {
	[AvailableThemes.LIGHT]: {
		icon: SunIcon,
		translationKeys: {
			name: "theme.available_theme.light",
			ariaLabel: "theme.available_theme.icon.light",
		},
	},
	[AvailableThemes.DARK]: {
		icon: MoonIcon,
		translationKeys: {
			name: "theme.available_theme.dark",
			ariaLabel: "theme.available_theme.icon.dark",
		},
	},
};
