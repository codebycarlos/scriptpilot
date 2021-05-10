import { ArgumentValidator, RequestHandler, JSend } from "./_dependencies.js";
import { GET } from "./GET";
export async function resolve(req, res) {
	ArgumentValidator.check([...arguments]);

	if (req.method == "GET") return await RequestHandler.protectRoute(GET, {req, res});
	return JSend(res).failDetailed(
		{
			message: "Method not allowed.",
		},
		405
	);
}
