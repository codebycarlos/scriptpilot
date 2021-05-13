import { ArgumentValidator, RequestHandler, JSend } from "./_dependencies"
import { GET } from "./GET"
export async function resolve(req, res) {
	ArgumentValidator.check([...arguments])

	if (req.method == "GET") return await GET({ req, res })
	return await RequestHandler.methodNotAllowedResponse(res)
}
