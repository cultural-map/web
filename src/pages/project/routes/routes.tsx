import { RouteObject } from "react-router-dom";

import { ProjectRoutePaths } from "./paths";

export const PROJECT_ROUTES: RouteObject[] = [
	{
		path: ProjectRoutePaths.PROJECT,
		lazy: async () => {
			const { Project } = await import("_pages/project");
			return { Component: Project };
		},
	},
];
