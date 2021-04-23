import { ArgumentValidator, Session, LogRocket } from "./_dependencies.js";
export async function session(session = null, user) {
	ArgumentValidator.check([user, user.id, user.name, user.email]);

	let authorised;
	try {
		authorised = await Session.recheckPermissions(user.id);
	} catch (e) {
		consola.error(`Rechecking of permissions failed. ${e}`);
	}

    session["user"]["id"] = user.id;

	return authorised ? session : null;
}
