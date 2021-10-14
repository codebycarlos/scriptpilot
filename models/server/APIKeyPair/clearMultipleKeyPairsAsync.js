import { APIKeysCollection, Try } from "./_dependencies"
export async function clearMultipleKeyPairsAsync({ FunctionName }) {
	const [, error] = await Try(() => APIKeysCollection.clearMultipleKeysAsync({ FunctionName }))
	if (error) throw Error("Unable to clear key pairs.")
}
