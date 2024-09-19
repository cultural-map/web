import { CulturalMapRoutePaths } from "_pages/cultural-map/routes/paths";
import { ProfileRoutePaths } from "_pages/profile/routes/paths";
import { ProjectRoutePaths } from "_pages/project/routes/paths";
import { Page } from "_router/types/Page";

export const TABS: Page[] = [
	{
		link: ProjectRoutePaths.PROJECT,
		title: "common.header.tabs.project",
	},
	{
		link: CulturalMapRoutePaths.CULTURAL_MAP,
		title: "common.header.tabs.cultural_map",
	},
	{
		link: ProfileRoutePaths.PROFILE,
		title: "common.header.tabs.profile",
	},
];
