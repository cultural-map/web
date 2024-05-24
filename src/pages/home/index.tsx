import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

import { LanguageDropdown } from "_components/LanguageDropdown";
import { ThemeToggle } from "_components/ThemeToggle";

export const Home = () => {
	const { t } = useTranslation();

	return (
		<>
			<Helmet>
				<title>{t("home.title")}</title>
			</Helmet>

			<ThemeToggle />
			<LanguageDropdown />
		</>
	);
};
