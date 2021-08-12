import { Try } from "./_dependencies"
import { createKeyAsync } from "./createKeyAsync"
import { saveKeyPairAsync } from "./saveKeyPairAsync"

export async function registerNewKeyPairAsync({ FunctionName, Qualifier }) {
	const [key, errorCreatingKey] = await Try(() => createKeyAsync())
	if (errorCreatingKey) throw Error("Unable to create new API key.")

	const [, errorSavingKey] = await Try(() => saveKeyPairAsync({ FunctionName, Qualifier, key }))
	if (errorSavingKey) throw Error("Unable to save newly generated API key.")
}
