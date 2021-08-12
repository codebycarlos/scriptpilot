import { CustomAxiosAsync, Try } from "./_dependencies"
export async function getScriptAsync(session, { FunctionName, Qualifier }) {
	const axios = await CustomAxiosAsync(session)

	if (!FunctionName) throw Error("No script name provided.")

	const urlModifier = Qualifier ? `/versions/${Qualifier}` : ""

	const [response, error] = await Try(() =>
		axios.get(`api/scripts/${FunctionName}${urlModifier}`),
	)

	if (error) throw Error(error?.response?.data?.message ?? "Unable to load script.")

	return response?.data?.data?.script
}
