import { GLOBALIZATION_PROPERTIES } from "@cultural-map/locations";
import { FallbackLngObjList, Resource } from "i18next";

const { defaultLanguage } = GLOBALIZATION_PROPERTIES;

export const convertDetectedLanguage = (
	language: string,
	resources: Resource,
	fallbackLanguages: FallbackLngObjList,
): string => {
	const languageKeys = Object.keys(resources);

	if (!languageKeys.includes(language)) {
		const fallbackKeys = Object.keys(fallbackLanguages);

		if (fallbackKeys.includes(language)) {
			return fallbackLanguages[language][0];
		} else {
			return languageKeys.find((lng) => lng === language) ?? defaultLanguage;
		}
	}

	return language;
};
