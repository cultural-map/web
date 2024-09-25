import "@testing-library/jest-dom/vitest";
import { vi } from "vitest";

vi.mock("react-i18next", () => ({
	initReactI18next: {
		init: () => {},
		type: "3rdParty",
	},
	useTranslation: () => ({
		t: (key: string) => key,
		i18n: {
			changeLanguage: () => new Promise(() => {}),
		},
	}),
}));
