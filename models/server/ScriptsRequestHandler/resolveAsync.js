import { RequestHandler } from "./_dependencies"
import { GETAsync } from "./GETAsync"
export async function resolveAsync(req, res) {
	;({ req, res } = await RequestHandler.runMiddlewareAsync(req, res))

	if (req.method == "GET")
		return await RequestHandler.protectRouteAsync(GETAsync, { req, res }, 1)

	return RequestHandler.methodNotAllowedResponse(res)
}
