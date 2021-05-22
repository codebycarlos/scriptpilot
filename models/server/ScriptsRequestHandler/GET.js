import { Lambda, JSend, consola } from "./_dependencies"
export async function GET(req, res) {
	const lambda = await Lambda.load()
	let scripts

	try {
		scripts = await lambda.listAllFunctions()
	} catch (e) {
		consola.error(e)
		return JSend(res).error({ message: "Request for scripts failed." })
	}

	return JSend(res).success({ data: { scripts } })
}
