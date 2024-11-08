import { RouteObject } from "react-router-dom";

import { SignInRoutePaths } from "./paths";

export const SIGN_IN_ROUTES: RouteObject[] = [SignInRoutePaths.LOGIN, SignInRoutePaths.SIGNIN].map((path) => ({
	path,
	lazy: async () => {
		const { SignIn } = await import("_pages/sign-in");
		return { Component: SignIn };
	},
}));
