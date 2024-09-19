import { AnimationControls } from "framer-motion";
import { useState } from "react";

import { AnimationNames } from "_constants/animation-names";

export type UseMapMarkerIconActionsParams = {
	shadowAnimationControls: AnimationControls;
};

export type UseMapMarkerIconActions = {
	handleMarkerClick: () => void;
	handleMarkerClickOutside: () => void;
};

export const useMapMarkerIconActions = (
	shadowAnimationControls: UseMapMarkerIconActionsParams["shadowAnimationControls"],
): UseMapMarkerIconActions => {
	const [isMarkerClicked, setIsMarkerClicked] = useState(false);

	const handleMarkerClick = () => {
		if (!isMarkerClicked) {
			shadowAnimationControls.start(AnimationNames.PULSE);
			setIsMarkerClicked(true);
		}
	};

	const handleMarkerClickOutside = () => {
		shadowAnimationControls.stop();
		shadowAnimationControls.set(AnimationNames.HIDDEN);

		setIsMarkerClicked(false);
	};

	return {
		handleMarkerClick,
		handleMarkerClickOutside,
	};
};
