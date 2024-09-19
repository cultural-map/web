import { Button } from "@nextui-org/react";
import { ReactElement } from "react";
import { useTranslation } from "react-i18next";

import { useThemes } from "_hooks/useThemes";

export const ThemeFloatingActionButton = (): ReactElement => {
	const { t } = useTranslation();
	const { translationKeys, icon: ThemeIcon, handleToggleTheme } = useThemes();

	return (
		<div className="fixed bottom-4 right-4">
			<Button
				isIconOnly
				radius="full"
				variant="faded"
				onClick={handleToggleTheme}
				aria-label={t("theme.available_theme.aria_label")}
			>
				<ThemeIcon className="size-4" aria-label={t(translationKeys.ariaLabel)} />
			</Button>
		</div>
	);
};
