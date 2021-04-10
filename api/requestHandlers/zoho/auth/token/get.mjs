import { AccessToken } from "../../../../../models/AccessToken/AccessToken.mjs";
import { JSendResponse } from "../../../../../_utils/api/JSendResponse.mjs";
import { validateArguments } from "../../../../../_utils/validation/validateArguments.mjs";
import consola from "consola";
export async function get(req, res) {
	validateArguments([...arguments]);
	const orgId = req.query.orgId.replace(/\D/g, "");
	let token;

	try {
		token = AccessToken.getAccessCode(orgId);
		return JSendResponse(res).success({ data: { token: token } });
	}
	catch(e) {
		const errorMessage = "Request for new token failed.";
		consola.error(`${errorMessage} ${e}`);
		return JSendResponse(res).error({ message: `${errorMessage}` });
	}
}
