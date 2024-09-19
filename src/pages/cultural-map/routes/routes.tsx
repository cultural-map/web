import { lazy, ReactElement } from "react";
import { Route } from "react-router-dom";

import { CulturalMapRoutePaths } from "./paths";

const CulturalMap = lazy(() =>
	import(/* webpackChunkName: "[page]:cultural-map" */ "_pages/cultural-map").then(({ CulturalMap }) => ({
		default: CulturalMap,
	})),
);

export const CulturalMapRoutes: ReactElement = (
	<>
		<Route path={CulturalMapRoutePaths.CULTURAL_MAP} element={<CulturalMap />} />
	</>
);
