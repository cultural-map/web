import { AnimationNames } from "_constants/animation-names";
import { AnimationVariants } from "_types/AnimationVariants";

export const ANIMATION_VARIANTS: Record<"icon" | "shadow", AnimationVariants> = {
	icon: {
		[AnimationNames.INITIAL]: {
			rotate: -45,
		},
		[AnimationNames.HOVER]: {
			scale: 1.2,
			transition: {
				duration: 0.5,
			},
		},
	},
	shadow: {
		[AnimationNames.HIDDEN]: {
			scale: 0.0,
			opacity: 0,
			rotateX: -45,
		},
		[AnimationNames.PULSE]: {
			rotateX: -45,
			scale: [0.1, 1.2],
			opacity: [0, 0.25, 0],
		},
	},
};
