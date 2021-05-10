import { ArgumentValidator, JSend } from "./_dependencies";
import { assessRequestAccessRights } from "./assessRequestAccessRights";

export async function tryAssessRequestAccessRights(res, protectionLevel, session) {
	ArgumentValidator.check([protectionLevel]);
	let requestAccessRightsAssessment;

	try {
		requestAccessRightsAssessment = await assessRequestAccessRights(protectionLevel, session);
	} catch (e) {
		JSend(res).error({ message: "Access denied: inadequate access rights." }, 401);
		return null;
	}

	if (requestAccessRightsAssessment.accessGranted !== true) {
		JSend(res).error({ message: requestAccessRightsAssessment.message }, 401);
		return null;
	}

	return true;
}
