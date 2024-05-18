import { GLOBALIZATION_PROPERTIES, Language } from "@cultural-map/locations";
import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import { languages } from "_translations/languages";

i18next.use(initReactI18next).init({
	lng: GLOBALIZATION_PROPERTIES.defaultLanguage,
	fallbackLng: {
		pt: [Language.ptBR],
		en: [Language.enUS],
		default: [GLOBALIZATION_PROPERTIES.defaultLanguage],
	},
	resources: {
		[Language.enUS]: languages.enUS,
		[Language.ptBR]: languages.ptBR,
	},
});

export { i18next };
