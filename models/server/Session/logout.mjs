import { Session } from "./Session.mjs";
import { logoutHTTPCall } from "./helper/logoutHTTPCall.mjs";
export async function logout() {
	let CSRFToken;

	try {
		CSRFToken = await Session.fetchCSRFToken();
	} catch (e) {
		throw Error(`Unable to fetch CSRF token necessary for logout. ${e}`);
	}

	try {
		return await logoutHTTPCall({ host: process.env.HOST, CSRFToken });
	} catch (e) {
		throw Error(`Issues making call to terminate user session. ${e}`);
	}
}
