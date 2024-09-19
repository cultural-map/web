import { useTheme } from "next-themes";
import { createElement, useCallback, useMemo } from "react";
import { toast } from "react-hot-toast";
import { useTranslation } from "react-i18next";

import { THEME_INFO, ThemeInfo } from "_components/ThemeFloatingActionButton/constants/theme-info";
import { AvailableThemes, DEFAULT_THEME } from "_styles/themes";

export type UseThemesReturn = {
	handleToggleTheme: () => void;
} & ThemeInfo;

export const useThemes = (): UseThemesReturn => {
	const { t } = useTranslation();
	const { setTheme, theme = DEFAULT_THEME, systemTheme = DEFAULT_THEME } = useTheme();

	const currentTheme = theme === AvailableThemes.SYSTEM ? systemTheme : theme;
	const { translationKeys, icon } = useMemo(() => THEME_INFO[currentTheme], [currentTheme]);

	const handleToggleTheme = useCallback(() => {
		const newTheme = currentTheme === AvailableThemes.LIGHT ? AvailableThemes.DARK : AvailableThemes.LIGHT;
		const { translationKeys, icon } = THEME_INFO[newTheme];

		setTheme(newTheme);

		toast(
			t("theme.toggle_theme_button.toast.title", {
				theme: t(translationKeys.name),
			}),
			{
				icon: createElement(icon, { className: "size-6" }),
			},
		);
	}, [t, currentTheme, setTheme]);

	return {
		icon,
		translationKeys,
		handleToggleTheme,
	};
};
