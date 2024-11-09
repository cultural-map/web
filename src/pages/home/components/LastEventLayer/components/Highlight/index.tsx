import { createElement, ReactElement } from "react";
import { Trans } from "react-i18next";

import { HeroIcon } from "_types/HeroIcon";

export type HighlightProps = {
	icon: HeroIcon;
	translationKey: string;
};

export const Highlight = ({ icon, translationKey }: HighlightProps): ReactElement<HighlightProps> => (
	<div className="flex-col gap-5 w-full w-max-[280px]">
		<div className="p-5 rounded-full size-20 bg-white dark:bg-black">
			{createElement(icon, {
				className: "fill-orange-500",
			})}
		</div>

		<span className="text-lg">
			<Trans
				i18nKey={translationKey}
				components={{
					bold: <span className="font-bold" />,
				}}
			/>
		</span>
	</div>
);
