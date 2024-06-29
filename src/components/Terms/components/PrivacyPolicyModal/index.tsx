import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from "@nextui-org/react";
import { ReactElement } from "react";
import { useTranslation } from "react-i18next";

import { ModalControlProps } from "_types/ModalControlProps";

export type PrivacyPolicyModalProps = ModalControlProps;

export const PrivacyPolicyModal = ({
	isOpen,
	onClose,
}: PrivacyPolicyModalProps): ReactElement<PrivacyPolicyModalProps> => {
	const { t } = useTranslation();

	return (
		<Modal backdrop="opaque" isOpen={isOpen} onClose={onClose}>
			<ModalContent>
				{(onClose) => (
					<>
						<ModalHeader className="flex flex-col gap-1">{t("common.privacy_policy.modal.title")}</ModalHeader>

						<ModalBody></ModalBody>

						<ModalFooter>
							<Button onPress={onClose}>{t("common.privacy_policy.modal.action")}</Button>
						</ModalFooter>
					</>
				)}
			</ModalContent>
		</Modal>
	);
};
