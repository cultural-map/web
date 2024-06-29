import { Image } from "@nextui-org/image";
import { Button } from "@nextui-org/react";
import { useTranslation } from "react-i18next";

import GoogleIcon from "_assets/images/social/google.svg";

export const SsoGoogle = () => {
	const { t } = useTranslation();

	return (
		<Button
			variant="bordered"
			aria-label={t("sign_in.sso.google")}
			startContent={<Image className="size-4" src={GoogleIcon} />}
		>
			{t("sign_in.sso.google")}
		</Button>
	);
};
