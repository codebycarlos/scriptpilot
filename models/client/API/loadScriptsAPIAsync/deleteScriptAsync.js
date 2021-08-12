import { CustomAxiosAsync, Try } from "./_dependencies"
export async function deleteScriptAsync(session, { FunctionName, Qualifier }) {
	const axios = await CustomAxiosAsync(session)

	const urlModifier = Qualifier ? `/versions/${Qualifier}` : ""

	const [response, error] = await Try(() =>
		axios.delete(`api/scripts/${FunctionName}${urlModifier}`),
	)

	if (error) throw Error("Unable to delete script.")
}
