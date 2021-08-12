import { LambdaAsync, Try } from "./_dependencies"
export async function createScriptAsync(
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
	const { Lambda } = await LambdaAsync()

	Input.Code.ZipFile = Buffer.from(Input.Code.ZipFile, "base64")

	const [script, error] = await Try(() => Lambda.createFunction(Input))

	if (!script || error) throw Error("Unable to create script.")

	return script
}
