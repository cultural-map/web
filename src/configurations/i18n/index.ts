import { GLOBALIZATION_PROPERTIES, Language } from "@cultural-map/locations";
import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import { translations } from "_translations/index";

i18next
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		detection: {
			lookupLocalStorage: "language",
			lookupSessionStorage: "language",
		},
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
	});

export { i18next };
