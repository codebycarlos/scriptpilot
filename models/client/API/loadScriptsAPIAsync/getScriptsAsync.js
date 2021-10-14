import { CustomAxiosAsync, Try } from "./_dependencies"
export async function getScriptsAsync(session) {
	const axios = await CustomAxiosAsync(session)

	const [response, error] = await Try(() => axios.get("api/scripts"))

	if (error) throw Error(error?.response?.data?.message ?? "Unable to load scripts.")

	return response?.data?.data?.scripts
}
