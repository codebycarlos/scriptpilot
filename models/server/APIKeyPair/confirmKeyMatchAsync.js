import { Try } from "./_dependencies"
import { getKeyAsync } from "./getKeyAsync"

export async function confirmKeyMatchAsync({ FunctionName, Qualifier, key }) {
	const [decryptedKey, errorFindingDecryptedKey] = await Try(() =>
		getKeyAsync({ FunctionName, Qualifier }),
	)
	if (errorFindingDecryptedKey)
		throw Error(`Unable to find or load key matching script with ARN: ${ARN}.`)

	return key === decryptedKey
}
