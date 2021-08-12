import { ArgumentValidator, Try } from "./_dependencies"
import { fetchUserHTTPCallAsync } from "./helper/fetchUserHTTPCallAsync"

export async function fetchUserAsync({ apiDomain, orgId, userId }) {
	ArgumentValidator.check([...arguments, apiDomain, orgId, userId])

	const [HTTPCallResponse, errorWithHTTPCall] = await Try(() =>
		fetchUserHTTPCallAsync({
			apiDomain,
			orgId,
			userId,
		}),
	)

	if (errorWithHTTPCall) throw Error(`Unable to make HTTP call.`)

	return HTTPCallResponse.data.users[0]
}
