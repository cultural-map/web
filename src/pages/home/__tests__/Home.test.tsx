import { render, screen } from "@testing-library/react";
import { it, describe, expect } from "vitest";

import { Home } from "_pages/home";

const setup = () => {
	render(<Home />);
};

describe("<Home />", () => {
	it("should render the Vite logo", () => {
		setup();

		const viteLogo = screen.getByAltText("Vite logo");
		expect(viteLogo).toBeVisible();
	});

	it("should render the React logo", () => {
		setup();

		const reactLogo = screen.getByAltText("React logo");
		expect(reactLogo).toBeVisible();
	});
});
