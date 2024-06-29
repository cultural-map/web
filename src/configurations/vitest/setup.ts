import "@testing-library/jest-dom/vitest";
import { vi } from "vitest";

vi.mock("react-i18next", () => ({
	useTranslation: () => {
		return {
			t: (key: string) => key,
			i18n: {
				changeLanguage: () => new Promise(() => {}),
			},
		};
	},
	initReactI18next: {
		init: () => {},
		type: "3rdParty",
	},
}));
