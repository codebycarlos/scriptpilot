import { RequestHandler } from "./_dependencies"
import { GETAsync } from "./GETAsync"
import { DELETEAsync } from "./DELETEAsync"
import { POSTAsync } from "./POSTAsync"
export async function resolveAsync(req, res) {
	;({ req, res } = await RequestHandler.runMiddlewareAsync(req, res))

	if (req.method == "GET")
		return await RequestHandler.protectRouteAsync(GETAsync, { req, res }, 2)

	if (req.method == "DELETE")
		return await RequestHandler.protectRouteAsync(DELETEAsync, { req, res }, 2)

	if (req.method == "POST")
		return await RequestHandler.protectRouteAsync(POSTAsync, { req, res }, 2)

	return RequestHandler.methodNotAllowedResponse(res)
}
