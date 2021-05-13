import { ArgumentValidator, RequestHandler } from "./_dependencies"
import { GET } from "./GET"
export async function resolve(req, res) {
	ArgumentValidator.check([...arguments])

	if (req.method == "GET") return await RequestHandler.protectRoute(GET, { req, res }, 2)
	return await RequestHandler.methodNotAllowedResponse(res)
}
