import { UserCircleIcon } from "@heroicons/react/24/solid";
import { ReactElement } from "react";

import { MarkerIcon } from "_components/CulturalMap/components/MarkerIcon";
import { MarkerWrapper, MarkerWrapperProps } from "_components/CulturalMap/components/MarkerWrapper";

export type CurrentLocationMarkerProps = Pick<MarkerWrapperProps, "anchor">;

export const CurrentLocationMarker = (props: CurrentLocationMarkerProps): ReactElement<CurrentLocationMarkerProps> => (
	<MarkerWrapper {...props}>
		<MarkerIcon icon={UserCircleIcon} color="bg-red-500" />
	</MarkerWrapper>
);
