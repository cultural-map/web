import { Image } from "@nextui-org/react";
import { ReactElement } from "react";
import { useTranslation } from "react-i18next";

export const UnionQuadrant = (): ReactElement => {
	const { t } = useTranslation();

	return (
		<div className="flex flex-col items-center justify-center pt-5">
			<div className="max-w-[700px]">
				<Image
					className="w-full max-w-[700px] h-full max-h-[400px]"
					isZoomed
					radius="lg"
					src="https://picsum.photos/700/400.webp"
				/>

				<div className="flex flex-col gap-10 pt-5">
					<p className="font-bold text-6xl">{t("home.information.union.title")}</p>
					<p>{t("home.information.union.description")}</p>
				</div>
			</div>
		</div>
	);
};
