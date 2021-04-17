import { addExpiryTime } from "./addExpiryTime.mjs";
import { fetchNew } from "./fetchNew.mjs";
import { getAccessCode } from "./getAccessCode.mjs";
import { isActive } from "./isActive.mjs";
import { save } from "./save.mjs";
import { Token } from "../Token/Token.mjs";

export const AccessToken = {
	addExpiryTime,
	fetchNew,
	getAccessCode,
	isActive,
	save,
	load: Token.load,
	isLocked: Token.isLocked,
};
