import { LambdaAsync } from "./_dependencies"
export async function getScriptAsync({ name }) {
	try {
		const { Lambda } = await LambdaAsync()
		const script = await Lambda.getFunction({ FunctionName: name })

		return { script, error: null, message: null }
	} catch (e) {
		if (e.name === "ResourceNotFoundException") {
			return { script: null, error: e, message: "Script not found." }
		}

		return { script: {}, error: e, message: "Request for script failed." }
	}
}
