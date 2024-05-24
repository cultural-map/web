import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { Button } from "@nextui-org/react";
import { useTheme } from "next-themes";
import { ReactElement } from "react";
import { toast } from "react-hot-toast";
import { useTranslation } from "react-i18next";

import { AvailableThemes } from "_styles/themes/available-themes";

export const ThemeToggle = (): ReactElement => {
	const { t } = useTranslation();
	const { theme, setTheme, systemTheme } = useTheme();

	const currentTheme = theme === AvailableThemes.SYSTEM ? systemTheme : theme;
	const isLightTheme = currentTheme === AvailableThemes.LIGHT;

	const handleToggleTheme = () => {
		setTheme(isLightTheme ? AvailableThemes.DARK : AvailableThemes.LIGHT);

		toast(
			t("theme.toggle_theme_button.toast.title", {
				theme: isLightTheme ? t("theme.available_theme.dark") : t("theme.available_theme.light"),
			}),
			{
				icon: isLightTheme ? <MoonIcon className="size-6" /> : <SunIcon className="size-6" />,
			},
		);
	};

	return (
		<Button
			isIconOnly
			color="warning"
			variant="faded"
			onClick={handleToggleTheme}
			aria-label={t("theme.available_theme.aria_label")}
		>
			{isLightTheme ? (
				<SunIcon className="size-4" aria-label={t("theme.available_theme.icon.light")} />
			) : (
				<MoonIcon className="size-4" aria-label={t("theme.available_theme.icon.dark")} />
			)}
		</Button>
	);
};
