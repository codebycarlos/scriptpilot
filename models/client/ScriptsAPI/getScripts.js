import { CustomAxios } from "./_dependencies"
export async function getScripts() {
	const axios = await CustomAxios.load()

	return (await axios.get("api/scripts")).data.data.scripts
}
