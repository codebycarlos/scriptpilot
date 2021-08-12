import { CustomAxiosAsync, Try } from "./_dependencies"
export async function getAccessRightsLevelAsync(session) {
	const axios = await CustomAxiosAsync(session)
	const [response, error] = await Try(() => axios.get("api/auth/accessRightsLevel"))

	if (error) throw Error("Unable to determine access rights level.")
	return response.data.data.accessRightsLevel
}
