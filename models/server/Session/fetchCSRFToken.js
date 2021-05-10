import { fetchCsrfTokenHTTPCall } from "./helper/fetchCsrfTokenHTTPCall.js";
export async function fetchCsrfToken() {
	let response;

	try {
		response = await fetchCsrfTokenHTTPCall({ host: process.env.HOST });
	} catch (e) {
		throw Error(`Issues making call to fetch CSRF token. ${e}`);
	}

	if (!("data" in response)) throw Error(`Unable to read data from HTTP call: ${response}`);
	if (!("csrfToken" in response.data))
		throw Error(`Unable to read CSRF token from HTTP call: ${response} ${response.data}`);

	return response.data.csrfToken;
}
