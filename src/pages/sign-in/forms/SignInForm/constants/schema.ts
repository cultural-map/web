import { z } from "zod";

import { PASSWORD_REGEX } from "_validations/regex";

import { SignInFieldsName } from "./fields-name";

export const signInSchema = z.object({
	[SignInFieldsName.EMAIL]: z.string().email(),
	[SignInFieldsName.PASSWORD]: z.string().min(10).max(40).regex(PASSWORD_REGEX),
});
