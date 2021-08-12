import { CustomAxiosAsync, Try } from "./_dependencies"
export async function getVersionsAsync(session, { FunctionName }) {
	const axios = await CustomAxiosAsync(session)

	if (!FunctionName) throw Error("No function name provided.")

	const [response, error] = await Try(() => axios.get(`api/scripts/${FunctionName}/versions`))

	if (error) throw Error(error?.response?.data?.message ?? "Unable to load versions.")

	return response?.data?.data?.versions
}
