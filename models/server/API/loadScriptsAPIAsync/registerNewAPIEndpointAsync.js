import { Try, APIKeyPair } from "./_dependencies"
export async function registerNewAPIEndpointAsync({ FunctionName, Qualifier }) {
	const [, errorWithAPIKey] = await Try(() =>
		APIKeyPair.registerNewKeyPairAsync({ FunctionName, Qualifier }),
	)
	if (errorWithAPIKey) throw Error("Unable to register new API key for script.")
}
