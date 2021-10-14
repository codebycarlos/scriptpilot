import { LambdaAsync, Try } from "./_dependencies"
import { getScriptAPIEndpointURLAsync } from "./getScriptAPIEndpointURLAsync"
export async function getScriptAsync({ FunctionName, Qualifier }) {
	if (!Qualifier) Qualifier = "$LATEST"

	const { Lambda } = await LambdaAsync()

	const [script, error] = await Try(() => Lambda.getFunction({ FunctionName, Qualifier }))

	const [APIEndpointURL] = await Try(() =>
		getScriptAPIEndpointURLAsync({
			FunctionName,
			Qualifier,
		}),
	)

	if (error?.name === "ResourceNotFoundException") throw Error("Script not found.")
	if (error) throw Error("Request for script failed.")

	const Configuration = { ...script.Configuration, APIEndpointURL }

	return { ...script, Configuration }
}
