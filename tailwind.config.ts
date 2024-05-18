import { nextui } from "@nextui-org/theme";

import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: "class",
	plugins: [nextui()],
	content: ["./src/**/*.{ts,tsx}", "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"],
};

export default config;
