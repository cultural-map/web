import { Point } from "pigeon-maps";

import { Bounds } from "_components/CulturalMap/types/Bounds";

export type CulturalMapState = {
	zoom: number;
	center?: Point;
	initialCenter?: Point;
};

export type CulturalMapActions = {
	reset: () => void;
	increaseZoom: () => void;
	decreaseZoom: () => void;
	updateBounds: (bounds: Bounds) => void;
	updateCenter: (center: CulturalMapState["center"]) => void;
	updateInitialCenter: (initialCenter: CulturalMapState["initialCenter"]) => void;
};
