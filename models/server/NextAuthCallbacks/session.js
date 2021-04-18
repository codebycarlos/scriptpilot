import { ArgumentValidator, Session } from "./_dependencies.js";
export async function session(session = null, user) {
    ArgumentValidator.check([user, user.id]);
    let authorised;

    try {
		authorised = await Session.recheckPermissions(user.id);
	} catch (e) {
		consola.error(`Rechecking of permissions failed. ${e}`);
	}

    return authorised ? session : null;
}
