import { Button, Image } from "@nextui-org/react";
import { useTranslation } from "react-i18next";

import MetaIcon from "_assets/images/social/meta.svg";

export const SsoMeta = () => {
	const { t } = useTranslation();

	return (
		<Button
			variant="bordered"
			aria-label={t("sign_in.sso.meta")}
			startContent={<Image className="size-4" src={MetaIcon} />}
		>
			{t("sign_in.sso.meta")}
		</Button>
	);
};
