import { JSendResponse } from "../../../../../_utils/api/JSendResponse.mjs";
import { TokenRequest } from "../../../../../api/requestHandlers/zoho/auth/token/TokenRequest.mjs";
import consola from "consola";
export default async function handler(req, res) {
	if (req.method == "GET") {
		return await TokenRequest.get(req, res);
	}
	return JSendResponse(res).failDetailed({
		message: "Method not allowed.",
		status: 405,
	});
}
