import { ZohoAccount } from './ZohoAccount.mjs';
import { validateArguments } from "../../_utils/validation/validateArguments.mjs";
export function hasProfile(account, targetProfiles) {
	validateArguments([...arguments]);
	let profile;

	try {
		profile = ZohoAccount.fetchProfile(account);
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
