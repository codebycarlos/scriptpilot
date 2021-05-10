import { ArgumentValidator } from "./_dependencies.js";
import { fetchUser } from "./fetchUser.js";
export async function fetchProfile(account) {
	ArgumentValidator.check([...arguments, account.api_domain, account.id]);
	let user;

	try {
		user = await fetchUser(account);
	} catch (e) {
		throw Error(`Unable to fetch user. ${e}`);
	}

	if (!("profile" in user)) throw Error("Unable to read profile of user.");
	if (!("name" in user.profile)) throw Error("Unable to read name of profile.");

	return user.profile.name;
}
