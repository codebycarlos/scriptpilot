import { validateArguments } from "../../_utils/validation/validateArguments.mjs";
import { ZohoAccount } from "../ZohoAccount/ZohoAccount.mjs";
export function checkSignIn(user, account, profile) {
	validateArguments([...arguments]);
	let authorisedProfiles;

	try {
		authorisedProfiles = process.env.ZOHO_AUTHORISED_PROFILES.split(",");
	} catch (e) {
		throw Error(`Unable to read list of authorised profiles. ${e}`);
	}

	try {
		if (ZohoAccount.hasProfile(account, authorisedProfiles)) return true;
	} catch (e) {
		throw Error(`Unable to check if account has profile. ${e}`);
	}
}
