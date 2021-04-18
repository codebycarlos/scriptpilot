import { ArgumentValidator } from "../_dependencies.js";
import { AccessToken } from "../AccessToken.js";
export async function getCurrentAccessCodeIfActive(tokenPath) {
	ArgumentValidator.check([...arguments]);
	let token;

	try {
		token = await AccessToken.load(tokenPath);
	} catch (e) {
		throw Error(`Unable to load current access token: ${e}`);
	}

	try {
		if (await !AccessToken.isActive(token)) return null;
	} catch (e) {
		throw Error(`Unable to determine if current access token is active. ${e}`);
	}

	if (!("access_token" in token)) throw Error("Token does not contain access code.");

	return token.access_token;
}
