import { Settings, axios } from "./_dependencies"

export async function CustomAxiosAsync(session) {
	const CoreAsyncSettings = await Settings.CoreAsync()

	return axios.create({
		baseURL: CoreAsyncSettings.host,
		headers: session ? { common: { Authorization: JSON.stringify(session) } } : "",
	})
}
