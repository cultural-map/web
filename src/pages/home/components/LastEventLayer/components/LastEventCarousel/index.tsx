import { Image } from "@nextui-org/react";
import { EmblaViewportRefType } from "embla-carousel-react";
import { ReactElement } from "react";

import { useGenerateKeys } from "_hooks/useGenerateKeys";

const lastEvents = [
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

export type LastEventCarouselProps = {
	carouselRef: EmblaViewportRefType;
};

export const LastEventCarousel = ({ carouselRef }: LastEventCarouselProps): ReactElement<LastEventCarouselProps> => {
	const { generateKey } = useGenerateKeys();

	return (
		<div ref={carouselRef} className="overflow-hidden flex items-center justify-center w-full">
			<div className="flex">
				{lastEvents?.map((image, index) => {
					return (
						<div key={generateKey(index)} className="relative basis-52 sm:basis-96 grow-0 shrink-0 mx-2">
							<Image isZoomed src={image} height={570} radius="lg" />
						</div>
					);
				})}
			</div>
		</div>
	);
};
