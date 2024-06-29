import { createElement, ReactElement } from "react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

export const createFormElement = <TFormFields extends FieldValues>(
	children: ReactElement,
	errors: FieldErrors<TFormFields>,
	register: UseFormRegister<TFormFields>,
): ReactElement => {
	const elementName = children.props.name;

	let childrenProps = {
		...children.props,
		key: Math.random(),
	};

	if (elementName) {
		childrenProps = {
			...childrenProps,
			isInvalid: !!errors[elementName],
			errorMessage: errors[elementName]?.message as string,
		};

		if (typeof children.type === "function") {
			childrenProps.register = () => register(elementName, { required: children.props.isRequired });
		} else {
			childrenProps = {
				...childrenProps,
				...register(elementName, { required: children.props.isRequired }),
			};
		}
	}

	return createElement(children.type, childrenProps);
};
