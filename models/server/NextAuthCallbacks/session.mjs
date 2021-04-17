import { ArgumentValidator, Session } from "./_dependencies.mjs";
export async function session(session = null, user) {
	ArgumentValidator.check([user, user.id]);
	let authorised = false;

	try {
		authorised = await Session.recheckPermissions(user.id);
	} catch (e) {
		consola.error(`Rechecking of permissions failed. ${e}`);
	}

	if (authorised) return session;

	return null;
}
