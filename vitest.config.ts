import { defineConfig } from "vitest/config";

import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
	plugins: [react(), tsconfigPaths()],
	test: {
		css: true,
		globals: true,
		environment: "jsdom",
		exclude: ["node_modules/**", "dist/**"],
		setupFiles: "./src/configurations/vitest/setup.ts",
		include: ["**/*.test.{ts,tsx}", "**/*.test.e2e.{ts,tsx}"],
		coverage: {
			provider: "istanbul",
			reportsDirectory: ".reports/istanbul",
			exclude: ["**/__tests__/**", "**/__fixtures__/**"],
		},
	},
});
