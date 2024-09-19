import { Button } from "@nextui-org/react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import { useGenerateKeys } from "_hooks/useGenerateKeys";
import { ProjectRoutePaths } from "_pages/project/routes/paths";
import { SignInRoutePaths } from "_pages/sign-in/routes/paths";

export const ReadMoreLayer = () => {
	const { t } = useTranslation();

	const navigate = useNavigate();
	const { generateKey } = useGenerateKeys();

	const titleParts = t("home.read_more.title", {
		returnObjects: true,
	}) as string[];

	const handleNavigateToSignInPage = () => {
		navigate(SignInRoutePaths.SIGNIN);
	};

	const handleNavigateToProjectPage = () => {
		navigate(ProjectRoutePaths.PROJECT);
	};

	return (
		<div className="flex flex-col items-center justify-center px-4 xl:px-6 2xl:px-56 py-20">
			<div className="w-full lg:w-3/4 xl:w-1/2 text-center text-6xl md:text-8xl font-black text-default-foreground dark:text-white">
				{titleParts.map((titlePart, index) => (
					<p key={generateKey(index)}>{titlePart}</p>
				))}
			</div>

			<p className="w-full md:w-3/5 lg:w-1/2 xl:w-2/5 text-center mt-5 mb-10 text-default-foreground dark:text-white">
				{t("home.read_more.description")}
			</p>

			<div className="flex flex-wrap justify-center gap-5">
				<Button radius="full" onClick={handleNavigateToSignInPage}>
					{t("home.read_more.actions.subscribe")}
				</Button>

				<Button variant="light" radius="full" onClick={handleNavigateToProjectPage}>
					{t("home.read_more.actions.read_more")}
				</Button>
			</div>
		</div>
	);
};
