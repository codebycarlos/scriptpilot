import { ArgumentValidator, AccessToken, JSend, consola } from "./_dependencies.mjs";
export async function get(req, res) {
	ArgumentValidator.check([...arguments]);
	const orgId = req.query.orgId.replace(/\D/g, "");
	let token;

	try {
		token = await AccessToken.getAccessCode(orgId);
		return JSend(res).success({ data: { token: token } });
	} catch (e) {
		const errorMessage = "Request for new token failed.";
		consola.error(`${errorMessage} ${e}`);
		return JSend(res).error({ message: `${errorMessage}` });
	}
}
