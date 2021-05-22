import { Lambda, JSend, consola } from "./_dependencies"
export async function GET(req, res) {
	const lambda = await Lambda.load()
	const name = req.query.name
	let usage

	try {
		usage = await lambda.getAccountUsage()
	} catch (e) {
		consola.error(e)
		if (e.name === "ResourceNotFoundException")
			return JSend(res).error({ message: "Script not found." }, 404)
		return JSend(res).error({ message: "Request for script failed." })
	}

	return JSend(res).success({ data: { usage } })
}
