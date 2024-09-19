import { lazy, ReactElement } from "react";
import { Route } from "react-router-dom";

import { ProjectRoutePaths } from "./paths";

const Project = lazy(() =>
	import(/* webpackChunkName: "[page]:project" */ "_pages/project").then(({ Project }) => ({
		default: Project,
	})),
);

export const ProjectRoutes: ReactElement = (
	<>
		<Route path={ProjectRoutePaths.PROJECT} element={<Project />} />
	</>
);
