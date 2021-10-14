import { LambdaAsync, Try } from "./_dependencies"
export async function publishVersionAsync({ Description, FunctionName, OriginalVersion, ZipFile }) {
	const { Lambda } = await LambdaAsync()

	if (ZipFile) {
		ZipFile = Buffer.from(ZipFile, "base64")

		const [resultUpdatingCode, errorUpdatingCode] = await Try(() =>
			Lambda.updateFunctionCode({
				FunctionName,
				ZipFile,
			}),
		)

		if (errorUpdatingCode?.name === "ResourceNotFoundException")
			throw Error("Script not found.")
		if (errorUpdatingCode)
			throw Error("Unable to update script code in order to publish new version.")
	}

	const [script, errorPublishingVersion] = await Try(() =>
		Lambda.publishVersion({
			Description,
			FunctionName,
		}),
	)

	if (errorPublishingVersion) throw Error("Unable to publish script version.")

	return script
}
