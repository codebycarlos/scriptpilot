import { API, Try } from "./_dependencies"
export async function determineAccessRightsLevelAsync(context) {
	const { AuthAPI } = await API.loadAuthAPIAsync(context)

	const [accessRightsLevel, error] = await Try(() => AuthAPI.getAccessRightsLevelAsync())
	if (error) throw Error("Unable to get access rights level.")

	return accessRightsLevel
}
