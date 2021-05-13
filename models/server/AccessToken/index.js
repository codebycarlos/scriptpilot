import { addExpiryTime } from "./addExpiryTime"
import { fetchNew } from "./fetchNew"
import { getAccessCode } from "./getAccessCode"
import { isActive } from "./isActive"
import { save } from "./save"
import { Token } from "./_dependencies"

export const AccessToken = {
	addExpiryTime,
	fetchNew,
	getAccessCode,
	isActive,
	save,
	load: Token.load,
	isLocked: Token.isLocked,
}
