import { ReactElement } from "react";

import { IntroductionQuadrant } from "./components/IntroductionQuadrant";
import { UnionQuadrant } from "./components/UnionQuadrant";

export const InformationLayer = (): ReactElement => (
	<div className="px-8 sm:px-16 md:px-24 lg:px-32 xl:px-44 2xl:px-60 text-default-foreground dark:text-white">
		<IntroductionQuadrant />
		<UnionQuadrant />
	</div>
);
