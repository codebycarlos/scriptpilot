import { ArgumentValidator, Lambda, JSend, consola } from "./_dependencies"
export async function GET({ req, res }) {
	ArgumentValidator.check([...arguments])
	let scripts

	try {
		scripts = await Lambda.listAllFunctions()
	} catch (e) {
		consola.error(e)
		return JSend(res).error({ message: "Request for scripts failed." })
	}

	return JSend(res).success({ data: { scripts } })
}
