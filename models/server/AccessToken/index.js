import { addExpiryTime } from "./addExpiryTime.js";
import { fetchNew } from "./fetchNew.js";
import { getAccessCode } from "./getAccessCode.js";
import { isActive } from "./isActive.js";
import { save } from "./save.js";
import { Token } from "./_dependencies";

export const AccessToken = {
	addExpiryTime,
	fetchNew,
	getAccessCode,
	isActive,
	save,
	load: Token.load,
	isLocked: Token.isLocked,
};
