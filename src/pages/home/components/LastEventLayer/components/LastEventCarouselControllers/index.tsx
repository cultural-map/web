import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
import { Button } from "@nextui-org/react";
import { cx } from "classix";
import { UseEmblaCarouselType } from "embla-carousel-react";
import { ReactElement, useCallback, useEffect, useState } from "react";

export type LastEventCarouselControllersProps = {
	carouselApi: UseEmblaCarouselType[1];
};

export const LastEventCarouselControllers = ({
	carouselApi,
}: LastEventCarouselControllersProps): ReactElement<LastEventCarouselControllersProps> => {
	const [hasNextImages, setHasNextImages] = useState(true);
	const [hasPreviousImages, setHasPreviousImages] = useState(true);

	const scrollNext = () => carouselApi?.scrollNext();
	const scrollPrevious = () => carouselApi?.scrollPrev();

	const getButtonClass = (canScroll: boolean) => {
		const pointer = canScroll ? "cursor-pointer" : "cursor-not-allowed";
		const backgroundColor = canScroll ? "bg-orange-500" : "bg-white dark:bg-black";

		return cx("flex-col gap-5 size-14 p-0", pointer, backgroundColor);
	};

	const updateDisableState = useCallback(() => {
		if (carouselApi) {
			setHasNextImages(carouselApi.canScrollNext());
			setHasPreviousImages(carouselApi.canScrollPrev());
		}
	}, [carouselApi]);

	useEffect(() => {
		if (!carouselApi) return;

		updateDisableState();
		carouselApi.on("reInit", updateDisableState).on("select", updateDisableState);
	}, [carouselApi, updateDisableState]);

	return (
		<div className="flex gap-5">
			<Button
				className={getButtonClass(hasPreviousImages)}
				isIconOnly
				radius="full"
				onClick={scrollPrevious}
				disabled={!hasPreviousImages}
			>
				<ArrowLeftIcon className="size-6" />
			</Button>

			<Button
				className={getButtonClass(hasNextImages)}
				isIconOnly
				radius="full"
				onClick={scrollNext}
				disabled={!hasNextImages}
			>
				<ArrowRightIcon className="size-6" />
			</Button>
		</div>
	);
};
