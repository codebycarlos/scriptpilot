import { ArgumentValidator, RequestHandler, JSend } from "./_dependencies.js";
import { GET } from "./GET";
import { DELETE } from "./DELETE";
export async function resolve(req, res) {
	ArgumentValidator.check([...arguments]);

	if (req.method == "GET") return await RequestHandler.protectRoute(GET, {req, res});
	if (req.method == "DELETE") return await RequestHandler.protectRoute(DELETE, {req, res});
	return JSend(res).failDetailed(
		{
			message: "Method not allowed.",
		},
		405
	);
}
