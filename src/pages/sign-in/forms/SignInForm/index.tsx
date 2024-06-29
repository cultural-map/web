import { EnvelopeIcon, LockClosedIcon } from "@heroicons/react/24/solid";
import { Button, Input, Link } from "@nextui-org/react";
import { ReactElement } from "react";
import { SubmitHandler } from "react-hook-form";
import { useTranslation } from "react-i18next";

import { Form } from "_components/Form";
import { PasswordField } from "_components/PasswordField";
import { useZodForm } from "_hooks/useZodForm";
import { signInSchema } from "_pages/sign-in/forms/SignInForm/constants/schema";

import { SignInFieldsName } from "./constants/fields-name";
import { SignInFormFields } from "./types/SignInFormFields";

export const SignInForm = (): ReactElement => {
	const { t } = useTranslation();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useZodForm<SignInFormFields>({
		schema: signInSchema,
	});

	const onSubmit: SubmitHandler<SignInFormFields> = (data) => {
		console.log("🚀 ~ handleSubmit ~ data:", data);
	};

	return (
		<Form<SignInFormFields>
			className="flex flex-col gap-4"
			errors={errors}
			register={register}
			onSubmit={onSubmit}
			handleSubmit={handleSubmit}
		>
			<Input
				isRequired
				type="email"
				labelPlacement="outside"
				name={SignInFieldsName.EMAIL}
				label={t("sign_in.form.sign_in.field.email.label")}
				startContent={<EnvelopeIcon className="size-4" />}
				placeholder={t("sign_in.form.sign_in.field.email.placeholder")}
			/>

			<PasswordField
				isRequired
				name={SignInFieldsName.PASSWORD}
				label={t("sign_in.form.sign_in.field.password.label")}
				startContent={<LockClosedIcon className="size-4" />}
				placeholder={t("sign_in.form.sign_in.field.password.placeholder")}
			/>

			<Link className="text-xs cursor-pointer">{t("sign_in.form.sign_in.action.forgot_password")}</Link>

			<Button className="w-full mt-3" type="submit" aria-label={t("sign_in.form.sign_in.action.submit")}>
				{t("sign_in.form.sign_in.action.submit")}
			</Button>
		</Form>
	);
};
