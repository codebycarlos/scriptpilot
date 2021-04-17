import { ArgumentValidator, axios } from "../_dependencies.mjs";
export async function logoutHTTPCall(requestDefinition) {
	ArgumentValidator.check([...arguments, requestDefinition.host, requestDefinition.CSRFToken]);
	const { host, CSRFToken } = requestDefinition;
	console.log("🚀 ~ file: logoutHTTPCall.mjs ~ line 6 ~ logoutHTTPCall ~ CSRFToken", CSRFToken);
	console.log("🚀 ~ file: logoutHTTPCall.mjs ~ line 6 ~ logoutHTTPCall ~ host", host);

	try {
		return await axios.post(
			`${host}/api/auth/signout`,
			{
				"csrfToken": CSRFToken,
			},
			{
				headers: {
					"Content-Type": "application/x-www-form-urlencoded"
				},
			}
		);
	} catch (e) {
		throw Error(`HTTP call failed. ${e}`);
	}
}
