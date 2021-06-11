import { LambdaAsync } from "./_dependencies"
export async function deleteScriptAsync({ name, version }) {
	try {
		const { Lambda } = await LambdaAsync()

		await Lambda.deleteFunction({ FunctionName: name, Qualifier: version })

		return { error: null, message: null }
	} catch (e) {
		if (e.name === "ResourceNotFoundException") {
			return { error: e, message: "Script not found." }
		}

		return { error: e, message: "Request for script deletion failed." }
	}
}
