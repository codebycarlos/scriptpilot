import { RequestHandler, JSend } from "./_dependencies"
import { GET } from "./GET"
import { DELETE } from "./DELETE"
export async function resolve(req, res) {
	;({ req, res } = await RequestHandler.runMiddleware(req, res))

	if (req.method == "GET") return await RequestHandler.protectRoute(GET, { req, res })
	if (req.method == "DELETE") return await RequestHandler.protectRoute(DELETE, { req, res })
	return JSend(res).failDetailed(
		{
			message: "Method not allowed.",
		},
		405,
	)
}
