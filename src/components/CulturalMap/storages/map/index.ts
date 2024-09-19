import { create } from "zustand";

import { ZOOM_DEFAULT_CONFIGURATIONS } from "_components/CulturalMap/constants/zoom-default-configurations";

import { CulturalMapActions, CulturalMapState } from "./types";

const initialState: CulturalMapState = {
	zoom: 16,
};

export const useCulturalMapStore = create<CulturalMapState & CulturalMapActions>((set) => ({
	...initialState,
	reset: () => set(initialState),
	updateCenter: (center) => set({ center }),
	updateInitialCenter: (initialCenter) => set({ initialCenter, center: initialCenter }),
	increaseZoom: () =>
		set(({ zoom }) => ({
			zoom: zoom < ZOOM_DEFAULT_CONFIGURATIONS.maxZoom ? zoom + 1 : zoom,
		})),
	decreaseZoom: () =>
		set(({ zoom }) => ({
			zoom: zoom > ZOOM_DEFAULT_CONFIGURATIONS.minZoom ? zoom - 1 : zoom,
		})),
	updateBounds: ({ initial, center: currentCenter, zoom: currentZoom }) => {
		if (!initial) {
			return set(({ zoom, center }) => {
				const bounds = { zoom, center };

				if (zoom !== currentZoom) {
					bounds.zoom = currentZoom;
				}

				if (center !== currentCenter) {
					bounds.center = currentCenter;
				}

				return bounds;
			});
		}
	},
}));
