import { GLOBALIZATION_PROPERTIES, Language } from "@cultural-map/locations";
import i18next, { FallbackLngObjList, Resource } from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import { translations } from "_translations/index";

import { convertDetectedLanguage } from "./functions/convertDetectedLanguage";

i18next
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		fallbackLng: {
			pt: [Language.ptBR],
			en: [Language.enUS],
			es: [Language.esES],
			default: [GLOBALIZATION_PROPERTIES.defaultLanguage],
		},
		resources: {
			[Language.enUS]: translations.enUS,
			[Language.ptBR]: translations.ptBR,
			[Language.esES]: translations.esES,
		},
		detection: {
			lookupLocalStorage: "language",
			lookupSessionStorage: "language",
			order: ["querystring", "cookie", "localStorage"],
			convertDetectedLanguage: (language): string =>
				convertDetectedLanguage(
					language,
					i18next.options.resources as Resource,
					i18next.options.fallbackLng as FallbackLngObjList,
				),
		},
	});

export { i18next };
