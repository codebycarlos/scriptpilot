import { ArgumentValidator, AccessToken, axios } from "../_dependencies"
export async function fetchUserHTTPCall({apiDomain, orgId, userId}) {
	ArgumentValidator.check([
		...arguments,
		apiDomain,
		orgId,
		userId,
	])
	let accessTokenCode

	try {
		accessTokenCode = await AccessToken.getAccessCode({apiDomain, orgId})
	} catch (e) {
		throw Error(`Unable to authorise request. ${e}`)
	}

	return axios
		.get(`${apiDomain}/crm/v2/users/${userId}`, {
			headers: {
				"Content-Type": "application/x-www-form-urlencoded",
				Authorization: `Zoho-oauthtoken ${accessTokenCode}`,
			},
		})
		.catch((e) => {
			throw Error(`HTTP call failed. ${e}`)
		})
}
