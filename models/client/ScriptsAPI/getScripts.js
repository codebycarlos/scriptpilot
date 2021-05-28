import { CustomAxios } from "./_dependencies"
export async function getScripts(session) {
	const axios = await CustomAxios(session)

	return (await axios.get("api/scripts")).data.data.scripts
}
