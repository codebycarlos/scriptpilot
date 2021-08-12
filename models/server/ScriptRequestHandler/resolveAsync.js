import { RequestHandler } from "./_dependencies"
import { GETAsync } from "./GETAsync"
import { POSTAsync } from "./POSTAsync"
import { DELETEAsync } from "./DELETEAsync"
import { PUTAsync } from "./PUTAsync"
export async function resolveAsync(req, res) {
	;({ req, res } = await RequestHandler.runMiddlewareAsync(req, res))

	if (req.method == "GET")
		return await RequestHandler.protectRouteAsync(GETAsync, { req, res }, 2)

	if (req.method == "POST")
		return await RequestHandler.protectRouteAsync(POSTAsync, { req, res }, 2)

	if (req.method == "PUT")
		return await RequestHandler.protectRouteAsync(PUTAsync, { req, res }, 2)

	if (req.method == "DELETE")
		return await RequestHandler.protectRouteAsync(DELETEAsync, { req, res }, 2)

	return RequestHandler.methodNotAllowedResponse(res)
}
