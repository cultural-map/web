import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/theme";

import { rotateAxios } from "./src/configurations/tailwind/rotate-axios";

const config: Config = {
	darkMode: "class",
	plugins: [nextui(), rotateAxios()],
	content: ["./src/**/*.{ts,tsx}", "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"],
	theme: {
		fontFamily: {
			barlow: ['"Barlow"', "sans-serif"],
			"barlow-condensed": ['"Barlow Condensed"', "sans-serif"],
		},
	},
};

export default config;
