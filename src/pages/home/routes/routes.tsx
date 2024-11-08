import { RouteObject } from "react-router-dom";

import { HomeRoutePaths } from "./paths";

export const HOME_ROUTES: RouteObject[] = [HomeRoutePaths.DEFAULT, HomeRoutePaths.HOME].map((path) => ({
	path,
	lazy: async () => {
		const { Home } = await import("_pages/home");
		return { Component: Home };
	},
}));
