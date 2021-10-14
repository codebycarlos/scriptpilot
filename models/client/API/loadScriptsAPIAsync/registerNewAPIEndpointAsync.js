import { CustomAxiosAsync, Try } from "./_dependencies"
export async function registerNewAPIEndpointAsync(
	session,
	Input = {
		FunctionName,
		Qualifier,
		Version,
	},
) {
	const axios = await CustomAxiosAsync(session)

	const [, error] = await Try(() =>
		axios.post(`api/scripts/${Input.FunctionName}/apikey`, {
			data: {
				...Input,
			},
		}),
	)

	if (error) throw Error(error?.response?.data?.message ?? "Unable to register new API key.")
}
