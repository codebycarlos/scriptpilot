import { ArgumentValidator, Session, JSend } from "./_dependencies";

export async function tryGetSession({ req, res }) {
	ArgumentValidator.check([...arguments, req, res]);

	try {
		return await Session.getSession({req,res});
	} catch (e) {
		JSend(res).error({
			message: "Unable to retrieve session. You need to be signed in.",
		}, 401);
        return null;
	}
}