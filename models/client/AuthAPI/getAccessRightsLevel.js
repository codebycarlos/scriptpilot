import { CustomAxios } from "./_dependencies"
export async function getAccessRightsLevel(session) {
	const axios = await CustomAxios(session)
	const response = await axios.get(`api/auth/accessRightsLevel`)

	return response.data.data.accessRightsLevel
}
