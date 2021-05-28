import { API } from "./_dependencies"
export async function determineAccessRightsLevel(context) {
	const authAPI = await API.Auth(context)

	return await authAPI.getAccessRightsLevel()
}
