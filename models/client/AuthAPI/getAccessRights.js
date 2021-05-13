import { axios } from "./_dependencies"
export async function getAccessRights() {
    const response = await axios.get(`/api/auth/accessRights`)

    if (!("data" in response)) throw Error(`Unable to read data from HTTP call: ${response}`)
	if (!("accessRights" in response.data))
		throw Error(`Unable to read access rights from HTTP call: ${response} ${response.data}`)

	return response.data.accessRights
}