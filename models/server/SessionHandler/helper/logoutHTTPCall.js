import { ArgumentValidator, axios } from "../_dependencies"
export async function logoutHTTPCall(requestDefinition) {
	ArgumentValidator.check([...arguments, requestDefinition.host, requestDefinition.CSRFToken])
	const { host, CSRFToken } = requestDefinition

	try {
		return await axios.post(
			`${host}/api/auth/signout`,
			{
				csrfToken: CSRFToken,
			},
			{
				headers: {
					"Content-Type": "application/x-www-form-urlencoded",
				},
			},
		)
	} catch (e) {
		throw Error(`HTTP call failed. ${e}`)
	}
}
