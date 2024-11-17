import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import { ReactElement } from "react";
import { useTranslation } from "react-i18next";

import { Breakpoints } from "_constants/breakpoints";
import { useWindowSize } from "_hooks/useWindowSize";

import { SupportersCarousel } from "./components/SupportersCarousel";

export const SupportersLayer = (): ReactElement => {
	const { t } = useTranslation();
	const { width } = useWindowSize();

	return (
		<div className="flex flex-col mt-24 mb-28 text-default-foreground dark:text-white">
			<p className="font-barlow-condensed font-black text-7xl text-center">{t("home.supporters.title")}</p>

			<div className="flex justify-between h-56 mt-12">
				<SupportersCarousel />

				{width >= Breakpoints.LG && (
					<div className="absolute right-0 w-72 p-5 rounded-l-full bg-gray-800">
						<div className="flex justify-center items-center size-48 rounded-full bg-yellow-500">
							<ArrowLeftIcon className="size-28" />
						</div>
					</div>
				)}
			</div>
		</div>
	);
};
