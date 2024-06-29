import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from "@nextui-org/react";
import { ReactElement } from "react";
import { useTranslation } from "react-i18next";

import { ModalControlProps } from "_types/ModalControlProps";

export type CookiesPolicyModalProps = ModalControlProps;

export const CookiesPolicyModal = ({
	isOpen,
	onClose,
}: CookiesPolicyModalProps): ReactElement<CookiesPolicyModalProps> => {
	const { t } = useTranslation();

	return (
		<Modal backdrop="opaque" isOpen={isOpen} onClose={onClose}>
			<ModalContent>
				{(onClose) => (
					<>
						<ModalHeader className="flex flex-col gap-1">{t("common.cookies_policy.modal.title")}</ModalHeader>

						<ModalBody></ModalBody>

						<ModalFooter>
							<Button onPress={onClose}>{t("common.cookies_policy.modal.action")}</Button>
						</ModalFooter>
					</>
				)}
			</ModalContent>
		</Modal>
	);
};
