import { CustomAxiosAsync, Try } from "./_dependencies"
export async function invokeScriptAsync(
	session,
	{ FunctionName, Qualifier, InvocationType, LogType, Payload, ClientContext },
) {
	const axios = await CustomAxiosAsync(session)

	if (!FunctionName) throw Error("No script name provided.")

	const urlModifier = Qualifier ? `/versions/${Qualifier}` : ""

	const [response, error] = await Try(() =>
		axios.post(`api/scripts/${FunctionName}${urlModifier}/invoke`, {
			data: {
				InvocationType,
				LogType,
				Payload,
				ClientContext,
			},
		}),
	)

	if (error) throw Error(error?.response?.data?.message ?? "Unable to invoke script.")

	return response?.data?.data?.response
}
