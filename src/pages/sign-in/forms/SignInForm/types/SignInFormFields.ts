import { z } from "zod";

import { signInSchema } from "_pages/sign-in/forms/SignInForm/constants/schema";

export type SignInFormFields = z.infer<typeof signInSchema>;
