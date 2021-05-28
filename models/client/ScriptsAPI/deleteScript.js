import { CustomAxios } from "./_dependencies"
export async function deleteScript(session, { name, version }) {
	if (!name) throw Error("Script name not provided. ")
	const axios = await CustomAxios(session)

	return await axios.delete(`api/scripts/${name}`, {
		params: {
			version,
		},
	})
}
