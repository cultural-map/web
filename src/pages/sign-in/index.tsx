import { Divider } from "@nextui-org/react";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

import { Terms } from "_components/Terms";

import { SsoGoogle } from "./components/SsoGoogle";
import { SsoMeta } from "./components/SsoMeta";
import { SignInForm } from "./forms/SignInForm";

export const SignIn = () => {
	const { t } = useTranslation();

	return (
		<>
			<Helmet>
				<title>{t("sign_in.title")}</title>
			</Helmet>

			<div className="p-2 w-full h-full flex flex-col justify-between items-center">
				<div className="h-full flex flex-col gap-4 justify-center items-center">
					<div className="max-w-sm flex flex-col gap-4">
						<SignInForm />

						<div className="flex justify-center items-center contain-content">
							<Divider />
							<p className="mx-2">{t("sign_in.sso.or")}</p>
							<Divider />
						</div>

						<SsoGoogle />
						<SsoMeta />

						<p className="px-4 text-xs text-gray-400">
							<Terms />
						</p>
					</div>
				</div>

				<p className="text-sm text-gray-400">{t("common.rights")}</p>
			</div>
		</>
	);
};
