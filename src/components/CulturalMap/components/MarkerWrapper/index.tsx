import { Marker } from "pigeon-maps";
import { ReactElement } from "react";

import { MarkerPoint } from "_components/CulturalMap/types/MarkerPoint";

export type MarkerWrapperProps = {
	children: ReactElement;
	width?: number;
	height?: number;
	anchor: MarkerPoint["point"];
};

export const MarkerWrapper = ({
	children,
	width = 32,
	height = 40,
	...rest
}: MarkerWrapperProps): ReactElement<MarkerWrapperProps> => (
	<Marker {...rest} width={width} height={height}>
		{children}
	</Marker>
);
