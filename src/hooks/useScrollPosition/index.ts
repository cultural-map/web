import { useEffect, useState } from "react";

export const useScrollPosition = (): number => {
	const [scrollPosition, setScrollPosition] = useState(0);

	const updatePosition = () => {
		setScrollPosition(window.scrollY);
	};

	useEffect(() => {
		window.addEventListener("scroll", updatePosition);
		updatePosition();

		return () => {
			window.removeEventListener("scroll", updatePosition);
		};
	}, []);

	return scrollPosition;
};
