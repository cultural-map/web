import { Skeleton } from "@nextui-org/react";
import { Map } from "pigeon-maps";
import { ReactElement, useEffect } from "react";

import { useGenerateKeys } from "_hooks/useGenerateKeys";

import { CenterControl } from "./components/CenterControl";
import { CurrentLocationMarker } from "./components/CurrentLocationMarker";
import { MarkerIcon } from "./components/MarkerIcon";
import { MarkerWrapper } from "./components/MarkerWrapper";
import { ZoomControl } from "./components/ZoomControl";
import { ZOOM_DEFAULT_CONFIGURATIONS } from "./constants/zoom-default-configurations";
import { useInitialCenter } from "./hooks/useInitialCenter";
import { useCulturalMapStore } from "./storages/map";
import { MarkerPoint } from "./types/MarkerPoint";

export type CulturalMapProps = {
	isLoading?: boolean;
	points?: MarkerPoint[];
};

export const CulturalMap = ({ points = [], isLoading = false }: CulturalMapProps): ReactElement<CulturalMapProps> => {
	const { generateKey } = useGenerateKeys();

	const { zoom, center, updateBounds, reset } = useCulturalMapStore();
	const { currentLocationPoint } = useInitialCenter({
		firstPointCoordinates: points[0]?.point,
	});

	useEffect(() => {
		return () => {
			reset();
		};

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<Skeleton
			isLoaded={!isLoading && !!center}
			classNames={{
				base: "size-full",
				content: "size-full",
			}}
		>
			<Map
				{...ZOOM_DEFAULT_CONFIGURATIONS}
				boxClassname="size-full"
				zoom={zoom}
				center={center}
				onBoundsChanged={updateBounds}
			>
				<CenterControl />
				<ZoomControl />

				{currentLocationPoint && <CurrentLocationMarker anchor={currentLocationPoint} />}

				{points.map(({ point, icon, color }) => (
					<MarkerWrapper key={generateKey()} anchor={point}>
						<MarkerIcon icon={icon} color={color} />
					</MarkerWrapper>
				))}
			</Map>
		</Skeleton>
	);
};
