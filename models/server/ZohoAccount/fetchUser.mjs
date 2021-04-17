import { ArgumentValidator } from "./_dependencies.mjs";
import { fetchUserHTTPCall } from "./helper/fetchUserHTTPCall.mjs";
export async function fetchUser(account) {
	ArgumentValidator.check([...arguments, account.api_domain, account.id]);
	let HTTPCallResponse;

	try {
		HTTPCallResponse = await fetchUserHTTPCall({
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

	if (!("users" in HTTPCallResponse.data)) {
		consola.info("Response object: ", HTTPCallResponse);
		consola.info("Data portion: ", HTTPCallResponse.data);
		throw Error(`No user data received. Response: ${JSON.stringify(HTTPCallResponse.data)}`);
	}

	return HTTPCallResponse.data.users[0];
}
