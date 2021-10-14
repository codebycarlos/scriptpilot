import { CustomAxiosAsync, Try } from "./_dependencies"
export async function publishVersionAsync(
	session,
	Input = {
		Description,
		FunctionName,
		ZipFile,
	},
) {
	const axios = await CustomAxiosAsync(session)

	const [response, error] = await Try(() =>
		axios.post(`api/scripts/${Input.FunctionName}/publish`, {
			data: {
				...Input,
			},
		}),
	)

	if (error) throw Error(error?.response?.data?.message ?? "Unable to publish script version.")

	return response?.data?.data?.script
}
