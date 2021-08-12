import { RequestHandler } from "./_dependencies"
import { GETAsync } from "./GETAsync"

export async function resolveAsync(req, res) {
	;({ req, res } = await RequestHandler.runMiddlewareAsync(req, res))

	if (req.method == "GET") return await GETAsync(req, res)

	return RequestHandler.methodNotAllowedResponse(res)
}
