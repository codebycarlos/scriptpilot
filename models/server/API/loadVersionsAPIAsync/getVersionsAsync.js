import { LambdaAsync, Try } from "./_dependencies"
export async function getVersionsAsync({ FunctionName }) {
	const { Lambda } = await LambdaAsync()

	if (!FunctionName) throw Error("No function name provided.")

	const [versions, error] = await Try(() =>
		Lambda.listAllVersionsByFunctionAsync({ FunctionName }),
	)

	if (error) throw Error("Request for versions failed.")

	return versions
}
