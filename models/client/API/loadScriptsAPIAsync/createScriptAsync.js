import { CustomAxiosAsync, Try } from "./_dependencies"
export async function createScriptAsync(
	session,
	Input = {
		Code,
		CodeSigningConfigArn,
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
		PackageType,
		Publish,
		Role,
		Runtime,
		Tags,
		Timeout,
		TracingConfig,
		VpcConfig,
	},
) {
	const axios = await CustomAxiosAsync(session)

	const [response, error] = await Try(() =>
		axios.post(`api/scripts/new`, {
			data: {
				...Input,
			},
		}),
	)

	if (error) throw Error(error?.response?.data?.message ?? "Unable to create script.")

	return response?.data?.data?.script
}
