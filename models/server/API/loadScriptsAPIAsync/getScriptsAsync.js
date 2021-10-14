import { LambdaAsync, Try } from "./_dependencies"
export async function getScriptsAsync() {
	const { Lambda } = await LambdaAsync()

	const [scripts, error] = await Try(() => Lambda.listAllFunctionsAsync())

	if (error) throw Error("Request for scripts failed.")

	return scripts
}
