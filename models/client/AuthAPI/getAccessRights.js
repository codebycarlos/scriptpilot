import { CustomAxios } from "./_dependencies"
export async function getAccessRights(session) {
	const axios = await CustomAxios.load(session)
	const response = await axios.get(`api/auth/accessRights`)

	if (!(response.data && "data" in response.data))
		throw Error(`Unable to read data from HTTP call: ${response}`)
	if (!(response.data.data && "accessRights" in response.data.data))
		throw Error(`Unable to read access rights from HTTP call: ${response} ${response.data}`)

	return response.data.data.accessRights
}
