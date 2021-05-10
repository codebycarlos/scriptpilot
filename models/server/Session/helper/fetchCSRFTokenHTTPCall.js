import { ArgumentValidator, axios } from "../_dependencies.js";
export async function fetchCsrfTokenHTTPCall(requestDefinition) {
	ArgumentValidator.check([...arguments, requestDefinition.host]);
	const { host } = requestDefinition;

	try {
		return await axios.get(`${host}/api/auth/csrf`);
	} catch (e) {
		throw Error(`HTTP call failed. ${e}`);
	}
}
