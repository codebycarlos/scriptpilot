import { axios, Settings } from "./_dependencies"

export async function CustomAxios(session) {
	const coreSettings = await Settings.Core()
	
	return axios.create({
		baseURL: coreSettings.host,
		headers: session ? { common: { Authorization: JSON.stringify(session) } } : "",
	})
}
