import { validateArguments } from "../../_utils/validation/validateArguments.mjs";
import { ZohoAccount } from "./ZohoAccount.mjs";
export async function fetchProfile(account) {
	validateArguments([...arguments, account.api_domain, account.id]);
	let user;

	try {
		user = await ZohoAccount.fetchUser(account);
	} catch (e) {
		throw Error(`Unable to fetch user. ${e}`);
	}

	if (!("profile" in user)) throw Error("Unable to read profile of user.");
	if (!("name" in user.profile)) throw Error("Unable to read name of profile.");

	return user.profile.name;
}
