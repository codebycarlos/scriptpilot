import { LambdaAsync } from "./_dependencies"
export async function getScriptsAsync() {
	try {
		const { Lambda } = await LambdaAsync()
		const scripts = await Lambda.listAllFunctionsAsync()

		return { scripts, error: null, message: null }
	} catch (e) {
		return { scripts: [], error: e, message: "Request for scripts failed." }
	}
}
