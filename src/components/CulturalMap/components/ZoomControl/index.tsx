import { MinusIcon, PlusIcon } from "@heroicons/react/24/solid";
import { Button, ButtonGroup } from "@nextui-org/react";
import { ReactElement } from "react";

import { ZOOM_DEFAULT_CONFIGURATIONS } from "_components/CulturalMap/constants/zoom-default-configurations";
import { useCulturalMapStore } from "_components/CulturalMap/storages/map";

export const ZoomControl = (): ReactElement => {
	const { zoom, increaseZoom, decreaseZoom } = useCulturalMapStore();

	const isIncreaseZoomButtonDisabled = zoom >= ZOOM_DEFAULT_CONFIGURATIONS.maxZoom;
	const isDecreaseZoomButtonDisabled = zoom <= ZOOM_DEFAULT_CONFIGURATIONS.minZoom;

	return (
		<ButtonGroup className="absolute flex flex-col right-6 bottom-8" size="sm" radius="none" isIconOnly>
			<Button onClick={increaseZoom} isDisabled={isIncreaseZoomButtonDisabled}>
				<PlusIcon className="size-5" />
			</Button>

			<Button onClick={decreaseZoom} isDisabled={isDecreaseZoomButtonDisabled}>
				<MinusIcon className="size-5" />
			</Button>
		</ButtonGroup>
	);
};
