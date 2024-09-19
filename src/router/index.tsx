import { ReactElement } from "react";
import { Routes } from "react-router-dom";

import { CulturalMapRoutes } from "_pages/cultural-map/routes/routes";
import { HomeRoutes } from "_pages/home/routes/routes";
import { ProfileRoutes } from "_pages/profile/routes/routes";
import { ProjectRoutes } from "_pages/project/routes/routes";
import { SignInRoutes } from "_pages/sign-in/routes/routes";

export const Router = (): ReactElement => (
	<Routes>
		{HomeRoutes}
		{SignInRoutes}
		{ProjectRoutes}
		{ProfileRoutes}
		{CulturalMapRoutes}
	</Routes>
);
