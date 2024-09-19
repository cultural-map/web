import { BellIcon, CakeIcon, CameraIcon, FilmIcon, NewspaperIcon } from "@heroicons/react/24/solid";
import { ReactElement } from "react";

import { CulturalMap } from "_components/CulturalMap";
import { MarkerPoint } from "_components/CulturalMap/types/MarkerPoint";

const mockedPoints: MarkerPoint[] = [
	{ point: [52.3, -1.39], icon: BellIcon, color: "bg-red-500" },
	{ point: [52, -0.19], icon: CakeIcon, color: "bg-blue-500" },
	{ point: [53, -0.29], icon: CameraIcon, color: "bg-green-500" },
	{ point: [53, -1.59], icon: FilmIcon, color: "bg-blue-500" },
	{ point: [52, -2.49], icon: NewspaperIcon, color: "bg-purple-500" },
];

export const MapLayer = (): ReactElement => {
	return (
		<div className="relative w-full h-2/5 md:h-2/4 lg:h-2/3">
			<div className="absolute w-full h-48 md:h-60 lg:h-80 mt-7 bg-purple-500"></div>

			<div className="size-full px-4 sm:px-8 md:px-16 lg:px-24 xl:px-44 2xl:px-60">
				<CulturalMap points={mockedPoints} />
			</div>
		</div>
	);
};
