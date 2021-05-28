import { ArgumentValidator, Lambda, JSend, consola } from "./_dependencies"
export async function DELETE(req, res) {
	ArgumentValidator.check([...arguments])
	const lambda = await Lambda()
	const { name, version } = req.query

	try {
		await lambda.deleteFunction({ FunctionName: name, Qualifier: version })
	} catch (e) {
		consola.error(e)
		if (e.name === "ResourceNotFoundException")
			return JSend(res).error({ message: "Script not found." }, 404)
		return JSend(res).error({ message: "Request for script deletion failed." })
	}

	return JSend(res).success()
}
