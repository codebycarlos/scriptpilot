import { Try, Crypto, APIKeysCollection } from "./_dependencies"

export async function getKeyAsync({ FunctionName, Qualifier }) {
	const [keyPair, errorFindingKeyPair] = await Try(() =>
		APIKeysCollection.findOneAsync({ FunctionName, Qualifier }),
	)
	if (errorFindingKeyPair) throw Error(`Unable to find API key pair for script.`)

	if (!keyPair) return

	const [decryptedKey, errorWithDecryptedKey] = await Try(() =>
		Crypto.decryptAsync(keyPair.get("key")),
	)
	if (errorWithDecryptedKey) throw Error("Unable to decrypt API key.")

	return decryptedKey
}
