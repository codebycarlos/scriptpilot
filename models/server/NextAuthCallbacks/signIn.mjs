import { ArgumentValidator, Session } from "./_dependencies.mjs";
export async function signIn(user, account) {
	ArgumentValidator.check([account]);
	try {
		return await Session.checkPermissions(account);
	} catch (e) {
		consola.error(`Checking of permissions failed. ${e}`);
		return false;
	}
}
