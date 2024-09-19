import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

import { Header } from "_components/Header";

export const Project = () => {
	const { t } = useTranslation();

	return (
		<>
			<Helmet>
				<title>{t("project.title")}</title>
			</Helmet>

			<Header />
		</>
	);
};
