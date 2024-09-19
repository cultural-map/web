import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

import { Header } from "_components/Header";

export const Profile = () => {
	const { t } = useTranslation();

	return (
		<>
			<Helmet>
				<title>{t("profile.title")}</title>
			</Helmet>

			<Header />
		</>
	);
};
