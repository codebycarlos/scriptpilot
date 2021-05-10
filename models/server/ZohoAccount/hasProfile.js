import { ArgumentValidator } from "./_dependencies.js";
import { fetchProfile } from "./fetchProfile.js";
export async function hasProfile(account, targetProfiles) {
	ArgumentValidator.check([...arguments, account.api_domain, account.id]);
	let profile;

	try {
		profile = await fetchProfile(account);
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
