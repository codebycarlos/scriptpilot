import { ArgumentValidator, Try } from "./_dependencies"
import { fetchUserHTTPCallAsync } from "./helper/fetchUserHTTPCallAsync"

export async function fetchUserAsync({ apiDomain, userId }) {
	ArgumentValidator.check([...arguments, apiDomain, userId])

	const [HTTPCallResponse, errorWithHTTPCall] = await Try(() =>
		fetchUserHTTPCallAsync({
			apiDomain,
			userId,
		}),
	)

	if (errorWithHTTPCall) throw Error(`Unable to make HTTP call.`)

	return HTTPCallResponse.data.users[0]
}
