import { InputProps } from "@nextui-org/react";
import { UseFormRegister } from "react-hook-form";

export type NestedFormField = {
	register?: () => UseFormRegister<never>;
} & Pick<InputProps, "name" | "isInvalid" | "errorMessage">;
