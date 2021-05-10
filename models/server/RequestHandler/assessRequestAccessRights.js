import { ArgumentValidator } from "./_dependencies";
import { meetsProtectionLevel1 } from "./helper/meetsProtectionLevel1";
export async function assessRequestAccessRights(protectionLevel, session) {
	ArgumentValidator.check([protectionLevel]);

	if (protectionLevel >= 1 && !meetsProtectionLevel1(session))
		return { accessGranted: false, message: "You need to be signed in." };

	return { accessGranted: true };
}
