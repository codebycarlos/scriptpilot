import { ArgumentValidator, Lambda, JSend, consola } from "./_dependencies"
export async function GET(req, res) {
	ArgumentValidator.check([...arguments])
	const name = req.query.name
	const lambda = await Lambda()
	let script

	try {
		script = await lambda.getFunction({ FunctionName: name })
	} catch (e) {
		consola.error(e)
		if (e.name === "ResourceNotFoundException")
			return JSend(res).error({ message: "Script not found." }, 404)
		return JSend(res).error({ message: "Request for script failed." })
	}

	return JSend(res).success({ data: { script } })
}
