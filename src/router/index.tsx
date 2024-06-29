import { ReactElement } from "react";
import { Routes } from "react-router-dom";

import { HomeRoutes } from "_pages/home/routes/routes";
import { SignInRoutes } from "_pages/sign-in/routes/routes";

export const Router = (): ReactElement => (
	<Routes>
		{HomeRoutes}
		{SignInRoutes}
	</Routes>
);
