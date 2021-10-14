import { APIKeysCollection, Try } from "./_dependencies"

export async function saveKeyPairAsync({ FunctionName, Qualifier, key }) {
	const [, error] = await Try(() =>
		APIKeysCollection.upsertNewAsync({ FunctionName, Qualifier, key }),
	)
	if (error) throw Error("Unable to save new key pair.")
}
