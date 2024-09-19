import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

import { Header } from "_components/Header";

export const CulturalMap = () => {
	const { t } = useTranslation();

	return (
		<>
			<Helmet>
				<title>{t("cultural_map.title")}</title>
			</Helmet>

			<Header />
		</>
	);
};
