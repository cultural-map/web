import { MapProps } from "pigeon-maps";

export const ZOOM_DEFAULT_CONFIGURATIONS: Required<Pick<MapProps, "minZoom" | "maxZoom">> = {
	minZoom: 4,
	maxZoom: 18,
};
