import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import { Input, InputProps } from "@nextui-org/react";
import { ReactElement, useState } from "react";
import { useTranslation } from "react-i18next";

import { NestedFormField } from "_types/NestedFormField";

export type PasswordFieldProps = NestedFormField & Omit<InputProps, "type" | "endContent" | "labelPlacement">;

export const PasswordField = ({ register, ...rest }: PasswordFieldProps): ReactElement<PasswordFieldProps> => {
	const { t } = useTranslation();
	const [isVisible, setIsVisible] = useState(false);

	const toggleVisibility = () => setIsVisible((prevState) => !prevState);

	return (
		<Input
			{...rest}
			{...register?.()}
			labelPlacement="outside"
			type={isVisible ? "text" : "password"}
			endContent={
				<button className="focus:outline-none" type="button" onClick={toggleVisibility}>
					{isVisible ? (
						<EyeSlashIcon className="size-4 pointer-events-none" aria-label={t("fields.password.hide.aria_label")} />
					) : (
						<EyeIcon className="size-4 pointer-events-none" aria-label={t("fields.password.show.aria_label")} />
					)}
				</button>
			}
		/>
	);
};
