import { Button } from "@nextui-org/react";
import { useTheme } from "next-themes";
import { ReactElement, useCallback, useMemo } from "react";
import { toast } from "react-hot-toast";
import { useTranslation } from "react-i18next";

import { AvailableThemes, DEFAULT_THEME } from "_styles/themes";

import { THEME_INFO } from "./constants/theme-info";

export const ThemeToggle = (): ReactElement => {
	const { t } = useTranslation();
	const { setTheme, theme = DEFAULT_THEME, systemTheme = DEFAULT_THEME } = useTheme();

	const currentTheme = theme === AvailableThemes.SYSTEM ? systemTheme : theme;
	const { translationKeys, icon: ThemeIcon } = useMemo(() => THEME_INFO[currentTheme], [currentTheme]);

	const handleToggleTheme = useCallback(() => {
		const newTheme = currentTheme === AvailableThemes.LIGHT ? AvailableThemes.DARK : AvailableThemes.LIGHT;
		const { translationKeys, icon: ThemeIcon } = THEME_INFO[newTheme];

		setTheme(newTheme);

		toast(
			t("theme.toggle_theme_button.toast.title", {
				theme: t(translationKeys.name),
			}),
			{
				icon: <ThemeIcon className="size-6" />,
			},
		);
	}, [t, currentTheme, setTheme]);

	return (
		<Button
			isIconOnly
			color="warning"
			variant="faded"
			onClick={handleToggleTheme}
			aria-label={t("theme.available_theme.aria_label")}
		>
			{<ThemeIcon className="size-4" aria-label={t(translationKeys.ariaLabel)} />}
		</Button>
	);
};
