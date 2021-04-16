import { validateArguments } from "../../_utils/validation/validateArguments.mjs";
import { MongoDB } from "../MongoDB/MongoDB.mjs";
import { SessionAccount } from "../SessionAccount/SessionAccount.mjs";
import { Session } from "./Session.mjs";
export async function recheckPermissions(userId) {
    console.log("🚀 ~ file: recheckPermissions.mjs ~ line 6 ~ recheckPermissions ~ userId", userId)
	validateArguments([...arguments]);
	let account;

	try {
		await MongoDB.connectIfNotConnected();
	} catch (e) {
		throw Error(`Unable to connect to database in order to check permissions. ${e}`);
	}

	try {
		account = await SessionAccount.findByUserId(userId);
	} catch (e) {
		throw Error(`Unable to find account details using the session user id. ${e}`);
	}

	if (!("providerAccountId" in account))
		throw Error(`Unable to read account id from account details: ${account}.`);

	try {
		if (
			await Session.checkPermissions({
				api_domain: process.env.ZOHO_API_DOMAIN_DEFAULT,
				id: account.providerAccountId,
			})
		)
			return true;
	} catch (e) {
		throw Error(`Unable to check permissions. ${e}`);
	}

	return false;
}
