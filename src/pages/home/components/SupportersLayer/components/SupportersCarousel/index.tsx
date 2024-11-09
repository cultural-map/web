import { Image } from "@nextui-org/react";
import useEmblaCarousel from "embla-carousel-react";
import { ReactElement } from "react";

import { AUTO_SCROLL_PLUGIN } from "_constants/carousel-plugins";
import { useGenerateKeys } from "_hooks/useGenerateKeys";

const supporters = [
	"https://picsum.photos/224/224.webp",
	"https://picsum.photos/224/224.webp",
	"https://picsum.photos/224/224.webp",
	"https://picsum.photos/224/224.webp",
	"https://picsum.photos/224/224.webp",
	"https://picsum.photos/224/224.webp",
	"https://picsum.photos/224/224.webp",
	"https://picsum.photos/224/224.webp",
	"https://picsum.photos/224/224.webp",
	"https://picsum.photos/224/224.webp",
];

export const SupportersCarousel = (): ReactElement => {
	const { generateKey } = useGenerateKeys();

	const [emblaRef] = useEmblaCarousel({ loop: true }, [AUTO_SCROLL_PLUGIN]);

	return (
		<div ref={emblaRef} className="overflow-hidden flex items-center justify-center w-full">
			<div className="flex">
				{supporters?.map((image, index) => {
					return (
						<div key={generateKey(index)} className="relative basis-56 grow-0 shrink-0 mx-2">
							<Image isZoomed src={image} radius="full" />
						</div>
					);
				})}
			</div>
		</div>
	);
};
