import { createBrowserRouter, RouteObject } from "react-router-dom";

import { CULTURAL_MAP_ROUTES } from "_pages/cultural-map/routes/routes";
import { HOME_ROUTES } from "_pages/home/routes/routes";
import { PROFILE_ROUTES } from "_pages/profile/routes/routes";
import { PROJECT_ROUTES } from "_pages/project/routes/routes";
import { SIGN_IN_ROUTES } from "_pages/sign-in/routes/routes";

const routes: RouteObject[] = [
	...HOME_ROUTES,
	...SIGN_IN_ROUTES,
	...PROFILE_ROUTES,
	...PROJECT_ROUTES,
	...CULTURAL_MAP_ROUTES,
];

export const router = createBrowserRouter(routes);
