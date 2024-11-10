import { defineConfig } from "vite";

import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import svgr from "vite-plugin-svgr";
import { visualizer } from "rollup-plugin-visualizer";

export default defineConfig({
	plugins: [
		svgr(),
		react(),
		tsconfigPaths(),
		visualizer({
			filename: ".reports/bundle/visualization.html",
		}),
	],
	build: {
		rollupOptions: {
			treeshake: true,
		},
	},
});
