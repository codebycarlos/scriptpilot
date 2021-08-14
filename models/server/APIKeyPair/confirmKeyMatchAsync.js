import { Try } from "./_dependencies"
import { getKeyAsync } from "./getKeyAsync"

export async function confirmKeyMatchAsync({ FunctionName, Qualifier, apikey }) {
	const [decryptedKey, errorFindingDecryptedKey] = await Try(() =>
		getKeyAsync({ FunctionName, Qualifier }),
	)

	if (errorFindingDecryptedKey) throw Error(`Unable to find or load key matching script.`)

	return apikey === decryptedKey
}
