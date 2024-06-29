import { InputProps } from "@nextui-org/react";
import { UseFormRegister } from "react-hook-form";

export type FormField = UseFormRegister<never> & Pick<InputProps, "name" | "isInvalid" | "errorMessage">;
