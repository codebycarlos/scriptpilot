import { RequestHandler } from "./_dependencies"
import { GETAsync } from "./GETAsync"
import { DELETEAsync } from "./DELETEAsync"
export async function resolveAsync(req, res) {
	;({ req, res } = await RequestHandler.runMiddlewareAsync(req, res))

	if (req.method == "GET") {
		return await RequestHandler.protectRouteAsync(GETAsync, { req, res }, 2)
	}
	if (req.method == "DELETE") {
		return await RequestHandler.protectRoute(DELETEAsync, { req, res }, 2)
	}

	return RequestHandler.methodNotAllowedResponse(res)
}
