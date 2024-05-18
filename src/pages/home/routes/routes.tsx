import { lazy, ReactElement } from "react";
import { Route } from "react-router-dom";

import { HomeRoutePaths } from "./paths";

const Home = lazy(() =>
	import(/* webpackChunkName: "page-home" */ "_pages/home").then(({ Home }) => ({
		default: Home,
	})),
);

export const HomeRoutes: ReactElement = (
	<>
		<Route path={HomeRoutePaths.HOME} element={<Home />} />
		<Route path={HomeRoutePaths.DEFAULT} element={<Home />} />
	</>
);
