import { JSend } from "models/common/JSend/JSend.js";
import { TokenRequestHandler } from "models/server/TokenRequestHandler/TokenRequestHandler.js";
export default async function handler(req, res) {
	if (req.method == "GET") {
		return await TokenRequestHandler.get(req, res);
	}
	return JSend(res).failDetailed({
		message: "Method not allowed.",
		status: 405,
	});
}
