import { defineConfig } from "vite";

import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { manualChunksPlugin } from "vite-plugin-webpackchunkname";
import svgr from "vite-plugin-svgr";

export default defineConfig({
	plugins: [react(), svgr(), tsconfigPaths(), manualChunksPlugin()],
});
