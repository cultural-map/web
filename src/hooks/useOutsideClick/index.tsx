import { RefObject, useCallback, useEffect } from "react";

export type UseOutsideClickParams = {
	callback?: () => void;
	ref: RefObject<HTMLElement | null>;
};

export const useOutsideClick = (
	ref: UseOutsideClickParams["ref"],
	onClickOutside?: UseOutsideClickParams["callback"],
): void => {
	const handleClickOutside = useCallback(
		(event: MouseEvent | TouchEvent) => {
			const node = event.target as Node;

			if (ref.current && !ref.current.contains(node)) {
				onClickOutside?.();
			}
		},
		[ref, onClickOutside],
	);

	useEffect(() => {
		document.addEventListener("mouseup", handleClickOutside);
		document.addEventListener("touchend", handleClickOutside);

		return () => {
			document.removeEventListener("mouseup", handleClickOutside);
			document.removeEventListener("touchend", handleClickOutside);
		};
	}, [ref, handleClickOutside]);
};
