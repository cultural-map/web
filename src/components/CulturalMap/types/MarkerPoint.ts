import { Point } from "pigeon-maps";

import { HeroIcon } from "_types/HeroIcon";

export type MarkerPoint = {
	point: Point;
	color: string;
	icon: HeroIcon;
};
