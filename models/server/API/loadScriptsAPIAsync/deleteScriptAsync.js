import { LambdaAsync, Try, APIKeyPair } from "./_dependencies"
export async function deleteScriptAsync({ FunctionName, Qualifier }) {
	if (Qualifier === "$LATEST") Qualifier = undefined

	const { Lambda } = await LambdaAsync()

	const [, errorDeletingAPIKey] = await Try(() =>
		APIKeyPair.clearKeyPairAsync({ FunctionName, Qualifier }),
	)

	const [output, error] = await Try(() => Lambda.deleteFunction({ FunctionName, Qualifier }))

	if (error?.name === "ResourceNotFoundException") throw Error("Script not found.")
	if (error) throw Error("Request for script deletion failed.")
}
