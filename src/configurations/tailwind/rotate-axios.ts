import plugin from "tailwindcss/plugin";

const rotateX = {
	".rotate-x-20": {
		transform: "rotateX(20deg)",
	},
	".rotate-x-40": {
		transform: "rotateX(40deg)",
	},
	".rotate-x-60": {
		transform: "rotateX(60deg)",
	},
	".rotate-x-80": {
		transform: "rotateX(80deg)",
	},
};

const rotateY = {
	".rotate-y-20": {
		transform: "rotateY(20deg)",
	},
	".rotate-y-40": {
		transform: "rotateY(40deg)",
	},
	".rotate-y-60": {
		transform: "rotateY(60deg)",
	},
	".rotate-y-80": {
		transform: "rotateY(80deg)",
	},
};

export const rotateAxios = () =>
	plugin(({ addUtilities }) => {
		addUtilities({ ...rotateX, ...rotateY });
	});
