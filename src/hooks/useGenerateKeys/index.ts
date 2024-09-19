export type GenerateKeysReturn = {
	generateKey: (aggregator?: number) => number;
};

export const useGenerateKeys = (): GenerateKeysReturn => {
	const generateKey = (aggregator?: number): number => {
		const seed = Math.random() * new Date().getTime();

		if (aggregator) {
			return seed * aggregator;
		}

		return seed;
	};

	return {
		generateKey,
	};
};
