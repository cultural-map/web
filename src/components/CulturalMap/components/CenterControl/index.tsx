import { ViewfinderCircleIcon } from "@heroicons/react/24/solid";
import { Button } from "@nextui-org/react";
import { ReactElement } from "react";

import { useCulturalMapStore } from "_components/CulturalMap/storages/map";

export const CenterControl = (): ReactElement => {
	const { initialCenter, updateCenter } = useCulturalMapStore();

	return (
		<div className="absolute right-6 bottom-28 size-8">
			<Button
				size="sm"
				isIconOnly
				radius="none"
				isDisabled={!initialCenter}
				onClick={() => updateCenter(initialCenter)}
			>
				<ViewfinderCircleIcon className="size-5" />
			</Button>
		</div>
	);
};
