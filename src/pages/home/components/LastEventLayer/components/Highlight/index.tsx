import cx from "classix";
import { createElement, ReactElement } from "react";
import { Trans } from "react-i18next";

import { Breakpoints } from "_constants/breakpoints";
import { useWindowSize } from "_hooks/useWindowSize";
import { HeroIcon } from "_types/HeroIcon";

export type HighlightProps = {
	icon: HeroIcon;
	translationKey: string;
};

export const Highlight = ({ icon, translationKey }: HighlightProps): ReactElement<HighlightProps> => {
	const { width } = useWindowSize();

	const textClass = cx("text-lg", width < Breakpoints.LG && "text-center");
	const containerClass = cx("flex flex-col gap-5 w-full max-w-72", width < Breakpoints.LG && "items-center");

	return (
		<div className={containerClass}>
			<div className="p-5 rounded-full size-20 bg-white dark:bg-black">
				{createElement(icon, {
					className: "fill-orange-500",
				})}
			</div>

			<span className={textClass}>
				<Trans
					i18nKey={translationKey}
					components={{
						bold: <span className="font-bold" />,
					}}
				/>
			</span>
		</div>
	);
};
