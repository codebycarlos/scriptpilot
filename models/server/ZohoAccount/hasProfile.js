import { ArgumentValidator } from "./_dependencies.js";
import { ZohoAccount } from "./ZohoAccount.js";
import { fetchUserHTTPCall } from "./helper/fetchUserHTTPCall.js";
export async function hasProfile(account, targetProfiles) {
	ArgumentValidator.check([...arguments, account.api_domain, account.id]);
	let profile;

	try {
		profile = await ZohoAccount.fetchProfile(account);
	} catch (e) {
		throw Error(`Unable to get profile. ${e}`);
	}

	try {
		targetProfiles = targetProfiles.map((targetProfile) => targetProfile.toUpperCase());
		profile = profile.toUpperCase();
	} catch (e) {
		throw Error(`Issues capitalising profile names. ${e}`);
	}

	if (targetProfiles.includes(profile)) return true;
	return false;
}
