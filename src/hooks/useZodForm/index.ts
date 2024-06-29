import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, useForm, UseFormProps, UseFormReturn } from "react-hook-form";
import { z } from "zod";

export type UseZodFormProps<TFormFields extends FieldValues> = {
	schema: z.Schema;
} & UseFormProps<TFormFields>;

export const useZodForm = <TFormFields extends FieldValues>({
	schema,
	...rest
}: UseZodFormProps<TFormFields>): UseFormReturn<TFormFields> => {
	return useForm<TFormFields>({ resolver: zodResolver(schema), ...rest });
};
