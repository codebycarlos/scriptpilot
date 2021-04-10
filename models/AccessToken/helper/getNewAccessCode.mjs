import { validateArguments } from "../../../_utils/validation/validateArguments.mjs";
import { AccessToken } from "../AccessToken.mjs";
import { ensureTokenIsNotLocked } from "./ensureTokenIsNotLocked.mjs";
export function getNewAccessCode(tokenPath, refreshTokenPath) {
	validateArguments([...arguments]);
	let refreshToken;
	let newToken;

	try {
		ensureTokenIsNotLocked(tokenPath);
	} catch (e) {
		throw Error(`Unable to ensure token access file is not locked. ${e}`);
	}
	
	try {
		refreshToken = AccessToken.load(refreshTokenPath);
	} catch (e) {
		throw Error(`Unable to load refresh token. ${e}`);
	}

	try {
		newToken = AccessToken.fetchNew(refreshToken);
	} catch (e) {
		throw Error(`Unable to fetch new access token. ${e}`);
	}

	if (!("access_token" in newToken)) throw Error("New token does not contain access code.");

	AccessToken.save(newToken, tokenPath);

	return newToken.access_token;
}
