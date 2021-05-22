import { ArgumentValidator, CustomAxios } from "../_dependencies"
export async function logoutHTTPCall({ CSRFToken }) {
	ArgumentValidator.check([CSRFToken])
	const axios = await CustomAxios.load()

	try {
		return await axios.post(
			`api/auth/signout`,
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
