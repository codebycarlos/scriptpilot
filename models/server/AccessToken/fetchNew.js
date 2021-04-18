import { ArgumentValidator, consola } from "./_dependencies.js";
import { fetchNewHTTPCall } from "./helper/fetchNewHTTPCall.js";
export async function fetchNew(refreshToken) {
	ArgumentValidator.check([...arguments, refreshToken.refresh_token]);
	let HTTPCallResponse = undefined;

	try {
		HTTPCallResponse = await fetchNewHTTPCall({
			refreshTokenCode: refreshToken.refresh_token
		});
	} catch (e) {
		throw Error(`Unable to make HTTP call. ${e}`);
	}

	if (HTTPCallResponse == null) throw Error(`HTTP call response is null.`);
	if (!("data" in HTTPCallResponse)) {
		consola.info("Response object: ", HTTPCallResponse);
		throw Error("No data received.");
	}

	if (!("access_token" in HTTPCallResponse.data)) {
		consola.info("Response object: ", HTTPCallResponse);
		consola.info("Data portion: ", HTTPCallResponse.data);
		throw Error(`No access token received. Response: ${JSON.stringify(HTTPCallResponse.data)}`);
	}

	return HTTPCallResponse.data;
}
