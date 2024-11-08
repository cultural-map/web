import { RouteObject } from "react-router-dom";

import { CulturalMapRoutePaths } from "./paths";

export const CULTURAL_MAP_ROUTES: RouteObject[] = [
	{
		path: CulturalMapRoutePaths.CULTURAL_MAP,
		lazy: async () => {
			const { CulturalMap } = await import("_pages/cultural-map");
			return { Component: CulturalMap };
		},
	},
];
