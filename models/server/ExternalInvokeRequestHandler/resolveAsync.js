import { RequestHandler } from "./_dependencies"
import { POSTAsync } from "./POSTAsync"
export async function resolveAsync(req, res) {
	;({ req, res } = await RequestHandler.runMiddlewareAsync(req, res))

	if (req.method == "POST") return await POSTAsync(req, res)

	return RequestHandler.methodNotAllowedResponse(res)
}
