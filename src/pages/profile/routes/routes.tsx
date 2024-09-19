import { lazy, ReactElement } from "react";
import { Route } from "react-router-dom";

import { ProfileRoutePaths } from "./paths";

const Profile = lazy(() =>
	import(/* webpackChunkName: "[page]:profile" */ "_pages/profile").then(({ Profile }) => ({
		default: Profile,
	})),
);

export const ProfileRoutes: ReactElement = (
	<>
		<Route path={ProfileRoutePaths.PROFILE} element={<Profile />} />
	</>
);
