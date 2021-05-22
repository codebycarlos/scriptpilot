import { ArgumentValidator } from "./_dependencies"
import { fetchUserHTTPCall } from "./helper/fetchUserHTTPCall"

export async function fetchUser({apiDomain, orgId, userId}) {
	ArgumentValidator.check([...arguments, apiDomain, orgId, userId])
	let HTTPCallResponse

	try {
		HTTPCallResponse = await fetchUserHTTPCall({
			apiDomain,
			orgId,
			userId,
		})
	} catch (e) {
		throw Error(`Unable to make HTTP call. ${e}`)
	}

	if (HTTPCallResponse == null) throw Error(`HTTP call response is null.`)

	if (!("data" in HTTPCallResponse)) {
		consola.info("Response object: ", HTTPCallResponse)
		throw Error("No data received.")
	}

	if (!("users" in HTTPCallResponse.data)) {
		consola.info("Response object: ", HTTPCallResponse)
		consola.info("Data portion: ", HTTPCallResponse.data)
		throw Error(`No user data received. Response: ${JSON.stringify(HTTPCallResponse.data)}`)
	}

	return HTTPCallResponse.data.users[0]
}
