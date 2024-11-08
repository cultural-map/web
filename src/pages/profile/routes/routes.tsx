import { RouteObject } from "react-router-dom";

import { ProfileRoutePaths } from "./paths";

export const PROFILE_ROUTES: RouteObject[] = [
	{
		path: ProfileRoutePaths.PROFILE,
		lazy: async () => {
			const { Profile } = await import("_pages/profile");
			return { Component: Profile };
		},
	},
];
