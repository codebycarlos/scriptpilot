import { JSend } from "indigozest_modules/JSend";
import { TokenRequestHandler } from "models/server/TokenRequestHandler";
export default async function handler(req, res) {
	if (req.method == "GET") {
		return await TokenRequestHandler.get(req, res);
	}
	return JSend(res).failDetailed({
		message: "Method not allowed.",
		status: 405,
	});
}
