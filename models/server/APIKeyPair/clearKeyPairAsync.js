import { APIKeysCollection, Try } from "./_dependencies"
import { clearMultipleKeyPairsAsync } from "./clearMultipleKeyPairsAsync"

export async function clearKeyPairAsync({ FunctionName, Qualifier }) {
	if (!Qualifier || Qualifier === "$LATEST")
		return await clearMultipleKeyPairsAsync({ FunctionName })

	const [, error] = await Try(() => APIKeysCollection.clearKeyAsync({ FunctionName, Qualifier }))
	if (error) throw Error("Unable to clear key pair.")
}
