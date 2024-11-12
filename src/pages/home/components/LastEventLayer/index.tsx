import { GlobeAltIcon, UsersIcon, WalletIcon } from "@heroicons/react/24/solid";
import cx from "classix";
import useEmblaCarousel from "embla-carousel-react";
import { ReactElement } from "react";
import { Trans, useTranslation } from "react-i18next";

import { Breakpoints } from "_constants/breakpoints";
import { useGenerateKeys } from "_hooks/useGenerateKeys";
import { useWindowSize } from "_hooks/useWindowSize";

import { Highlight, HighlightProps } from "./components/Highlight";
import { LastEventCarousel } from "./components/LastEventCarousel";
import { LastEventCarouselControllers } from "./components/LastEventCarouselControllers";

const highlights: HighlightProps[] = [
	{ icon: UsersIcon, translationKey: "home.last_event.highlights.participants" },
	{ icon: WalletIcon, translationKey: "home.last_event.highlights.lectures" },
	{ icon: GlobeAltIcon, translationKey: "home.last_event.highlights.reach" },
];

export const LastEventLayer = (): ReactElement => {
	const { t } = useTranslation();

	const { width } = useWindowSize();
	const { generateKey } = useGenerateKeys();

	const [emblaRef, emblaApi] = useEmblaCarousel();

	const highlightContainerClass = cx("flex justify-center items-center gap-20", width < Breakpoints.LG && "flex-col");

	return (
		<div className="p-11 sm:px-16 md:px-24 lg:px-32 xl:px-44 2xl:px-60 text-default-foreground dark:text-white bg-blue-500">
			<div className="grid lg:grid-cols-2 gap-12 mb-24">
				<div className="ml-0 lg:ml-12 self-center">
					<p className="font-bold text-6xl mb-5">{t("home.last_event.title")}</p>

					<span>
						<Trans
							i18nKey="home.last_event.description"
							components={{
								bold: <span className="font-bold" />,
							}}
						/>
					</span>

					<div className="mt-14">
						<LastEventCarouselControllers carouselApi={emblaApi} />
					</div>
				</div>

				<LastEventCarousel carouselRef={emblaRef} />
			</div>

			<div className={highlightContainerClass}>
				{highlights.map((highlight, index) => (
					<Highlight key={generateKey(index)} {...highlight} />
				))}
			</div>
		</div>
	);
};
