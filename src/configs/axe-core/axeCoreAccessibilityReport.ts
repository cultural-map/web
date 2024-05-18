export const axeCoreAccessibilityReport = async (): Promise<void> => {
	if (!import.meta.env.PROD) {
		const React = await import("react");
		const ReactDOM = await import("react-dom");

		const axe = await import("@axe-core/react");
		axe.default(React, ReactDOM, 1000);
	}
};
