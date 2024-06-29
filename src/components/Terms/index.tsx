import { Link, useDisclosure } from "@nextui-org/react";
import { Trans, useTranslation } from "react-i18next";

import { CookiesPolicyModal } from "./components/CookiesPolicyModal";
import { PrivacyPolicyModal } from "./components/PrivacyPolicyModal";
import { ServicePolicyModal } from "./components/ServicePolicyModal";

export const Terms = () => {
	const { t } = useTranslation();

	const {
		isOpen: isCookiesPolicyModalOpen,
		onOpen: onCookiesPolicyModalOpen,
		onClose: onCookiesPolicyModalClose,
	} = useDisclosure();

	const {
		isOpen: isServicePolicyModalOpen,
		onOpen: onServicePolicyModalOpen,
		onClose: onServicePolicyModalClose,
	} = useDisclosure();

	const {
		isOpen: isPrivacyPolicyModalOpen,
		onOpen: onPrivacyPolicyModalOpen,
		onClose: onPrivacyPolicyModalClose,
	} = useDisclosure();

	return (
		<>
			<Trans
				i18nKey={t("common.terms")}
				components={{
					cookiesPolicyModalTrigger: <Link className="text-xs cursor-pointer" onPress={onCookiesPolicyModalOpen} />,
					servicePolicyModalTrigger: <Link className="text-xs cursor-pointer" onPress={onServicePolicyModalOpen} />,
					privacyPolicyModalTrigger: <Link className="text-xs cursor-pointer" onPress={onPrivacyPolicyModalOpen} />,
				}}
			/>

			<CookiesPolicyModal isOpen={isCookiesPolicyModalOpen} onClose={onCookiesPolicyModalClose} />
			<PrivacyPolicyModal isOpen={isPrivacyPolicyModalOpen} onClose={onPrivacyPolicyModalClose} />
			<ServicePolicyModal isOpen={isServicePolicyModalOpen} onClose={onServicePolicyModalClose} />
		</>
	);
};
