import { API } from "./_dependencies"
export async function determineAccessRightsLevelAsync(context) {
	const { AuthAPI } = await API.loadAuthAPIAsync(context)

	return await AuthAPI.getAccessRightsLevelAsync()
}
