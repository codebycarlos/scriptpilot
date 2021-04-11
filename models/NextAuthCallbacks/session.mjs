import { Session } from "../Session/Session.mjs";
import { validateArguments } from "../../_utils/validation/validateArguments.mjs";
import consola from "consola";
export async function session(session = null, user) {
	validateArguments([user, user.id]);
	let authorised = false;

	try {
		authorised = await Session.recheckPermissions(user.id);
	} catch (e) {
		consola.error(`Rechecking of permissions failed. ${e}`);
	}

	if (authorised) return session;

	return null;
}
