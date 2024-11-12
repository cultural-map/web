import { defineConfig } from "vite";

import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import svgr from "vite-plugin-svgr";
import { visualizer } from "rollup-plugin-visualizer";

export default defineConfig({
	plugins: [
		react(),
		tsconfigPaths(),
		visualizer({
			filename: ".reports/bundle/visualization.html",
		}),
		svgr({
			svgrOptions: {
				plugins: ["@svgr/plugin-svgo", "@svgr/plugin-jsx"],
				svgoConfig: {
					floatPrecision: 2,
				},
			},
		}),
	],
	build: {
		rollupOptions: {
			treeshake: true,
		},
	},
});
