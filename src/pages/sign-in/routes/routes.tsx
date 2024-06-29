import { lazy, ReactElement } from "react";
import { Route } from "react-router-dom";

import { SignInRoutePaths } from "./paths";

const SignIn = lazy(() =>
	import(/* webpackChunkName: "[page]:sign-in" */ "_pages/sign-in").then(({ SignIn }) => ({
		default: SignIn,
	})),
);

export const SignInRoutes: ReactElement = (
	<>
		<Route path={SignInRoutePaths.LOGIN} element={<SignIn />} />
		<Route path={SignInRoutePaths.SIGNIN} element={<SignIn />} />
	</>
);
