import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

import { Header } from "_components/Header";

import { InformationLayer } from "./components/InformationLayer";
import { LastEventLayer } from "./components/LastEventLayer";
import { MapLayer } from "./components/MapLayer";
import { QuestionAndAnswersLayer } from "./components/QuestionAndAnswersLayer";
import { ReadMoreLayer } from "./components/ReadMoreLayer";
import { SupportersLayer } from "./components/SupportersLayer";

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
			<SupportersLayer />

			<LastEventLayer />
			<QuestionAndAnswersLayer />
		</>
	);
};
