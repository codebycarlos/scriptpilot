import { validateArguments } from "../../../_utils/validation/validateArguments.mjs";
import { AccessToken } from "../AccessToken.mjs";
export function getCurrentAccessCodeIfActive(tokenPath) {
	validateArguments([...arguments]);
	let token;

	try {
		token =  AccessToken.load(tokenPath);
	} catch (e) {
		throw Error(`Unable to load current access token: ${e}`);
	}

	try {
		if (!AccessToken.isActive(token)) return null;
	} catch (e) {
		throw Error(`Unable to determine if current access token is active. ${e}`);
	}

	if (!("access_token" in token)) throw Error("Token does not contain access code.");

	return token.access_token;
}
