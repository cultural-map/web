import { Image, Link } from "@nextui-org/react";
import { cx } from "classix";
import dayjs from "dayjs";
import { useTranslation } from "react-i18next";

import LogoMinimal from "_assets/images/logo/minimal.png";
import LogoWaterMark from "_assets/images/logo/water-mark.svg?react";
import { Breakpoints } from "_constants/breakpoints";
import { useGenerateKeys } from "_hooks/useGenerateKeys";
import { useWindowSize } from "_hooks/useWindowSize";

import { Shortcuts, ShortcutsProps } from "./components/Shortcuts";

const INFO_YEAR = `FICBR ${dayjs().year()}`;

export const Footer = () => {
	const { t } = useTranslation();

	const { width } = useWindowSize();
	const { generateKey } = useGenerateKeys();

	const shortcuts = t("common.footer.shortcuts", {
		returnObjects: true,
	}) as ShortcutsProps[];

	const imageContainerClass = cx(width < Breakpoints.LG && "flex align-middle justify-center mb-5 w-full");
	const shortcutsContainerClass = cx("flex gap-10", width < Breakpoints.LG && "flex-wrap w-full justify-center");

	return (
		<div className="flex flex-col gap-40 p-12 bg-gray-200">
			<div className="absolute self-center">
				<LogoWaterMark className="w-full h-96 fill-gray-400 opacity-10" />
			</div>

			<div className="flex flex-wrap justify-between">
				<div className={imageContainerClass}>
					<Image className="w-16" radius="none" src={LogoMinimal} />
				</div>

				<div className={shortcutsContainerClass}>
					{shortcuts.map(({ title, topics }, index) => (
						<Shortcuts key={generateKey(index)} title={title} topics={topics} />
					))}
				</div>
			</div>

			<div className="flex justify-end gap-7 text-lg font-medium text-black mr-5">
				<Link className="text-black" underline="always" href="">
					{t("common.footer.cookies")}
				</Link>

				<span>/</span>
				<span>{INFO_YEAR}</span>
			</div>
		</div>
	);
};
