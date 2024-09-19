import { CulturalMapRoutePaths } from "_pages/cultural-map/routes/paths";
import { HomeRoutePaths } from "_pages/home/routes/paths";
import { ProfileRoutePaths } from "_pages/profile/routes/paths";
import { ProjectRoutePaths } from "_pages/project/routes/paths";
import { SignInRoutePaths } from "_pages/sign-in/routes/paths";

export type RoutePaths =
	| CulturalMapRoutePaths
	| HomeRoutePaths
	| ProfileRoutePaths
	| ProjectRoutePaths
	| SignInRoutePaths;
