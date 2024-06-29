import { FormHTMLAttributes, ReactElement, useMemo } from "react";
import { FieldValues, SubmitHandler, UseFormReturn } from "react-hook-form";

import { createFormElement } from "./functions/createFormElement";

export type FormProps<TFormFields extends FieldValues> = {
	onSubmit: SubmitHandler<TFormFields>;
	children: ReactElement | ReactElement[];
	errors: UseFormReturn<TFormFields>["formState"]["errors"];
} & Omit<FormHTMLAttributes<HTMLFormElement>, "onSubmit"> &
	Pick<UseFormReturn<TFormFields>, "register" | "handleSubmit">;

export const Form = <TFormFields extends FieldValues>({
	errors,
	register,
	onSubmit,
	children,
	handleSubmit,
	...rest
}: FormProps<TFormFields>): ReactElement<FormProps<TFormFields>> => {
	const formElements = useMemo((): ReactElement | ReactElement[] => {
		if (!Array.isArray(children)) {
			return createFormElement<TFormFields>(children, errors, register);
		}

		return children.map((child) => createFormElement<TFormFields>(child, errors, register));
	}, [errors, register, children]);

	return (
		<form {...rest} onSubmit={handleSubmit(onSubmit)}>
			{formElements}
		</form>
	);
};
