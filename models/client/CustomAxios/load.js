import { axios, Settings } from "./_dependencies"

export async function load(session = {}) {
	const coreSettings = await Settings.Core()
	
	return axios.create({
		baseURL: coreSettings.host,
		headers: { common: { Authorization: JSON.stringify(session) } },
	})
}
