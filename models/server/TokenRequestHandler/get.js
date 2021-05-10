import { ArgumentValidator, RequestHandler, AccessToken, JSend, consola } from "./_dependencies";
export async function GET({req, res}) {
	ArgumentValidator.check([req, res]);

	const orgId = req.query.orgId.replace(/\D/g, "");
	let token;

	try {
		token = await AccessToken.getAccessCode(orgId);
	} catch (e) {
		const errorMessage = "Request for new token failed.";
		consola.error(`${errorMessage} ${e}`);
		return JSend(res).error({ message: `${errorMessage}` });
	}

	return JSend(res).success({ data: { token } });
}
