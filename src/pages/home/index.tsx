import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

import { Header } from "_components/Header";

import { InformationLayer } from "./components/InformationLayer";
import { MapLayer } from "./components/MapLayer";
import { ReadMoreLayer } from "./components/ReadMoreLayer";

export const Home = () => {
	const { t } = useTranslation();

	return (
		<>
			<Helmet>
				<title>{t("home.title")}</title>
			</Helmet>

			<Header />

			<ReadMoreLayer />
			<MapLayer />

			<InformationLayer />
		</>
	);
};
