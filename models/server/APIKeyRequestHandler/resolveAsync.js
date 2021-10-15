import { RequestHandler } from "./_dependencies"
import { POSTAsync } from "./POSTAsync"
export async function resolveAsync(req, res) {
	;({ req, res } = await RequestHandler.runMiddlewareAsync(req, res))

	if (req.method == "POST")
		return await RequestHandler.protectRouteAsync(POSTAsync, { req, res }, 1)

	return RequestHandler.methodNotAllowedResponse(res)
}
