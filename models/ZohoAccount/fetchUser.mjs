import { validateArguments } from "../../_utils/validation/validateArguments.mjs";
import { fetchUserHTTPRequest } from "./helper/fetchUserHTTPRequest.mjs";
export function fetchUser(account) {
	validateArguments([...arguments, account.api_domain, account.id]);
	let HTTPCallResponse;

	try {
		HTTPCallResponse = fetchUserHTTPRequest({
			account,
		});
	} catch (e) {
		throw Error(`Unable to make HTTP call. ${e}`);
	}

	if (HTTPCallResponse == null) throw Error(`HTTP call response is null.`);
	if (!("data" in HTTPCallResponse)) {
		consola.info("Response object: ", HTTPCallResponse);
		throw Error("No data received.");
	}

	if (!("user" in HTTPCallResponse.data)) {
		consola.info("Response object: ", HTTPCallResponse);
		consola.info("Data portion: ", HTTPCallResponse.data);
		throw Error(`No user data received. Response: ${JSON.stringify(HTTPCallResponse.data)}`);
	}

	return HTTPCallResponse.data;
}
