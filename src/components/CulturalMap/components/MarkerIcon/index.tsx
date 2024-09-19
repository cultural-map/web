import { cx } from "classix";
import { motion, useAnimationControls } from "framer-motion";
import { createElement, ReactElement, useRef } from "react";

import { MarkerPoint } from "_components/CulturalMap/types/MarkerPoint";
import { AnimationNames } from "_constants/animation-names";
import { useOutsideClick } from "_hooks/useOutsideClick";

import { ANIMATION_VARIANTS } from "./constants/animation-variants";
import { useMapMarkerIconActions } from "./hooks/useMapMarkerIconClickActions";

export type MarkerIconProps = Pick<MarkerPoint, "icon" | "color">;

export const MarkerIcon = ({ icon, color }: MarkerIconProps): ReactElement<MarkerIconProps> => {
	const markerShadowAnimationControls = useAnimationControls();
	const { handleMarkerClick, handleMarkerClickOutside } = useMapMarkerIconActions(markerShadowAnimationControls);

	const ref = useRef<HTMLDivElement>(null);
	useOutsideClick(ref, handleMarkerClickOutside);

	const markerClassName = cx(
		color,
		"z-10 size-8 pointer-events-auto",
		"flex justify-center items-center",
		"rounded-tl-full rounded-tr-full rounded-br-full",
	);

	const markerShadowClassName = cx(
		"-z-10 absolute",
		"bg-black bg-opacity-25",
		"rounded-full rotate-x-60",
		"size-3 ml-[30%] mt-[0.20rem]",
	);

	const markerShadowPulseClassName = cx(
		"-z-20 absolute size-6",
		"ml-[12.5%] -mt-[0.20rem]",
		"rounded-full shadow-[0_0_1px_3px_#000000]",
	);

	return (
		<>
			<motion.div
				ref={ref}
				className={markerClassName}
				onClick={handleMarkerClick}
				initial={AnimationNames.INITIAL}
				whileHover={AnimationNames.HOVER}
				variants={ANIMATION_VARIANTS.icon}
			>
				{createElement(icon, { className: "absolute size-5 rotate-45" })}
			</motion.div>

			<div className={markerShadowClassName}></div>

			<motion.div
				className={markerShadowPulseClassName}
				initial={AnimationNames.HIDDEN}
				variants={ANIMATION_VARIANTS.shadow}
				animate={markerShadowAnimationControls}
				transition={{
					delay: 1,
					duration: 2.5,
					repeat: Infinity,
				}}
			/>
		</>
	);
};
