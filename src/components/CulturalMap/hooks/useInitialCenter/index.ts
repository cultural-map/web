import { Point } from "pigeon-maps";

import { useCulturalMapStore } from "_components/CulturalMap/storages/map";
import { useCurrentLocation } from "_hooks/useCurrentLocation";

export type UseInitialCenterReturn = {
	currentLocationPoint?: Point;
};

export type UseInitialCenterProps = {
	firstPointCoordinates?: Point;
};

export const useInitialCenter = ({ firstPointCoordinates }: UseInitialCenterProps): UseInitialCenterReturn => {
	const { updateInitialCenter } = useCulturalMapStore();

	const handleCurrentLocationFailure = () => {
		const currentCenter: Point = firstPointCoordinates ?? [0, 0];
		updateInitialCenter(currentCenter);
	};

	const currentLocationPoint = useCurrentLocation({
		onSuccess: updateInitialCenter,
		onFailure: handleCurrentLocationFailure,
	});

	return {
		currentLocationPoint,
	};
};
