import { LambdaAsync, Try } from "./_dependencies"
export async function editScriptAsync({
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
}) {
	const { Lambda } = await LambdaAsync()
	const [script, error] = await Try(() =>
		Lambda.updateFunctionConfiguration({
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
		}),
	)

	if (error?.name === "ResourceNotFoundException") throw Error("Script not found.")
	if (error) throw Error("Unable to edit script.")

	return script
}
