import { defineConfig } from "vite";

import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { manualChunksPlugin } from "vite-plugin-webpackchunkname";

export default defineConfig({
	plugins: [react(), tsconfigPaths(), manualChunksPlugin()],
});
