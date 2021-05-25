import { CustomAxios, consola } from "./_dependencies"
export async function getAccessRights(session) {
	const axios = await CustomAxios.load(session)
	const response = await axios.get(`api/auth/accessRights`)

	try {
		return response.data.data.accessRights
	}
	catch(e) {
		consola.error(e)
		return 0
	}
}
