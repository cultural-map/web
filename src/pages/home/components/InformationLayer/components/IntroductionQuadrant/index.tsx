import { Button, Image } from "@nextui-org/react";
import { ReactElement } from "react";
import { Trans, useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import { Breakpoints } from "_constants/breakpoints";
import { useGenerateKeys } from "_hooks/useGenerateKeys";
import { useWindowSize } from "_hooks/useWindowSize";
import { SignInRoutePaths } from "_pages/sign-in/routes/paths";

export const IntroductionQuadrant = (): ReactElement => {
	const { t } = useTranslation();
	const navigate = useNavigate();

	const { width } = useWindowSize();
	const { generateKey } = useGenerateKeys();

	const opportunitiesTopics = t("home.information.opportunities.topics", {
		returnObjects: true,
	}) as string[];

	const handleNavigateToSignInPage = () => {
		navigate(SignInRoutePaths.SIGNIN);
	};

	return (
		<div className="grid lg:grid-cols-2 gap-12 mt-28">
			<div className="lg:col-span-2">
				<p className="font-bold text-6xl">{t("home.information.title")}</p>
			</div>

			<div className="flex flex-col gap-5">
				<p>
					<Trans
						i18nKey="home.information.description"
						components={{
							bold: <span className="font-bold" />,
						}}
					/>
				</p>

				<div>
					<span>{t("home.information.opportunities.info")}</span>

					<ul className="list-disc ml-5">
						{opportunitiesTopics.map((topic, index) => (
							<li key={generateKey(index)}>
								<Trans
									i18nKey={topic}
									components={{
										bold: <span className="font-bold" />,
									}}
								/>
							</li>
						))}
					</ul>
				</div>

				<div className="mt-7">
					<Button radius="full" color="success" onClick={handleNavigateToSignInPage}>
						{t("home.information.actions.subscribe")}
					</Button>
				</div>
			</div>

			{width > Breakpoints.MD && (
				<div className="flex justify-center">
					<Image
						className="w-full max-w-[500px] h-full max-h-[700px]"
						isZoomed
						radius="lg"
						src="https://picsum.photos/500/700.webp"
					/>
				</div>
			)}
		</div>
	);
};
