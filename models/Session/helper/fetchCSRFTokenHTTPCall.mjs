import { validateArguments } from "../../../_utils/validation/validateArguments.mjs";
import axios from "axios";
export async function fetchCSRFTokenHTTPCall(requestDefinition) {
	validateArguments([...arguments, requestDefinition.host]);
	const { host } = requestDefinition;

	try {
		return await axios.get(`${host}/api/auth/csrf`);
	} catch (e) {
		throw Error(`HTTP call failed. ${e}`);
	}
}
