import { addExpiryTime } from "./addExpiryTime"
import { fetchNewAsync } from "./fetchNewAsync"
import { getAccessCodeAsync } from "./getAccessCodeAsync"
import { getAccessCodeForOrgAsync } from "./getAccessCodeForOrgAsync"
import { isActive } from "./isActive"
import { save } from "./save"
import { Token } from "./_dependencies"

export const AccessToken = {
	addExpiryTime,
	fetchNewAsync,
	getAccessCodeAsync,
	getAccessCodeForOrgAsync,
	isActive,
	save,
	load: Token.load,
	isLocked: Token.isLocked,
}
