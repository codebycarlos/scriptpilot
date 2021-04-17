import { ArgumentValidator } from "../_dependencies.mjs";
import { AccessToken } from "../AccessToken.mjs";
import { ensureTokenIsNotLocked } from "./ensureTokenIsNotLocked.mjs";
export async function getNewAccessCode(tokenPath, refreshTokenPath) {
	ArgumentValidator.check([...arguments]);
	let refreshToken;
	let newToken;

	try {
		await ensureTokenIsNotLocked(tokenPath);
	} catch (e) {
		throw Error(`Unable to ensure token access file is not locked. ${e}`);
	}
	
	try {
		refreshToken = await AccessToken.load(refreshTokenPath);
	} catch (e) {
		throw Error(`Unable to load refresh token. ${e}`);
	}

	try {
		newToken = await AccessToken.fetchNew(refreshToken);
	} catch (e) {
		throw Error(`Unable to fetch new access token. ${e}`);
	}

	if (!("access_token" in newToken)) throw Error("New token does not contain access code.");

	AccessToken.save(newToken, tokenPath);

	return newToken.access_token;
}
