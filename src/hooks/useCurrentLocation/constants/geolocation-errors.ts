import { ClockIcon, ShieldExclamationIcon, XMarkIcon } from "@heroicons/react/24/solid";

import { HeroIcon } from "_types/HeroIcon";

export type GeolocationError = {
	icon: HeroIcon;
	translationKey: string;
};

export const GEOLOCATION_ERRORS: Record<number, GeolocationError> = {
	[GeolocationPositionError.TIMEOUT]: {
		icon: ClockIcon,
		translationKey: "geolocation.location_permission.timeout",
	},
	[GeolocationPositionError.PERMISSION_DENIED]: {
		icon: ShieldExclamationIcon,
		translationKey: "geolocation.location_permission.permission_denied",
	},
	[GeolocationPositionError.POSITION_UNAVAILABLE]: {
		icon: XMarkIcon,
		translationKey: "geolocation.location_permission.position_unavailable",
	},
};
