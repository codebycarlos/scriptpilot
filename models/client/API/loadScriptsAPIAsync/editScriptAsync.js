import { CustomAxiosAsync, Try } from "./_dependencies"
export async function editScriptAsync(
	session,
	Input = {
		DeadLetterConfig,
		Description,
		Environment,
		FileSystemConfigs,
		FunctionName,
		Handler,
		ImageConfig,
		KMSKeyArn,
		Layers,
		MemorySize,
		RevisionId,
		Role,
		Runtime,
		Timeout,
		TracingConfig,
		VpcConfig,
	},
) {
	const axios = await CustomAxiosAsync(session)

	const [response, error] = await Try(() =>
		axios.put(`api/scripts/${Input.FunctionName}`, {
			data: {
				...Input,
			},
		}),
	)

	if (error) throw Error(error?.response?.data?.message ?? "Unable to edit script.")

	return response?.data?.data?.script
}
