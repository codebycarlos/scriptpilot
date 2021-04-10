import { validateArguments } from "../../_utils/validation/validateArguments.mjs";
import { getCurrentAccessCodeIfActive } from "./helper/getCurrentAccessCodeIfActive.mjs";
import { getNewAccessCode } from "./helper/getNewAccessCode.mjs";
import path from "path";
export function getAccessCode(orgId) {
	validateArguments([...arguments]);
	const tokenPath = path.resolve(_dirname,`../../secrets/zoho/org${orgId}/tokens/access.json`);
	const refreshTokenPath = `../../secrets/zoho/org${orgId}/tokens/refresh.json`;
	let currentAccessCode;
	let newAccessCode;

	try {
		currentAccessCode = getCurrentAccessCodeIfActive(tokenPath);
	} catch (e) {
		consola.warn(`Unable to check current access code. ${e}`);
	}

	if (currentAccessCode) return currentAccessCode;

	try {
		newAccessCode = getNewAccessCode(tokenPath, refreshTokenPath);
	} catch (e) {
		throw Error(`Unable to get new access code. ${e}`);
	}

	return newAccessCode;
}
