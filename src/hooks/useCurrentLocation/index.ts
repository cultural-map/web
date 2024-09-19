import { Point } from "pigeon-maps";
import { useState, useEffect, createElement, useCallback } from "react";
import { toast } from "react-hot-toast";
import { useTranslation } from "react-i18next";

import { GEOLOCATION_ERRORS, GeolocationError } from "./constants/geolocation-errors";

export type UseCurrentLocationReturn = Point | undefined;

export type UseCurrentLocationProps = {
	onSuccess?: (position: Point) => void;
	onFailure?: (error: GeolocationError) => void;
};

export const useCurrentLocation = (props?: UseCurrentLocationProps): UseCurrentLocationReturn => {
	const { t } = useTranslation();
	const [latLng, setLatLng] = useState<Point>();

	const getPositionSuccess = useCallback<PositionCallback>(
		({ coords: { latitude, longitude } }) => {
			const coordinates: Point = [latitude, longitude];

			setLatLng(coordinates);
			props?.onSuccess?.(coordinates);
		},
		[props, setLatLng],
	);

	const getPositionFailure = useCallback<PositionErrorCallback>(
		(error) => {
			const geolocationError = GEOLOCATION_ERRORS[error.code];
			props?.onFailure?.(geolocationError);

			toast(t(geolocationError.translationKey), {
				icon: createElement(geolocationError.icon, { className: "size-6" }),
			});
		},
		[t, props],
	);

	useEffect(() => {
		navigator.geolocation.getCurrentPosition(getPositionSuccess, getPositionFailure, {
			enableHighAccuracy: true,
		});

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return latLng;
};
