import { Session } from "../Session/Session.mjs";
import { validateArguments } from "../../_utils/validation/validateArguments.mjs";
export async function signIn(user, account) {
	validateArguments([account]);
	try {
		return await Session.checkPermissions(account);
	} catch (e) {
		consola.error(`Checking of permissions failed. ${e}`);
		return false;
	}
}
