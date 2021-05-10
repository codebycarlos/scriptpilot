import { ArgumentValidator } from "./_dependencies";
import { tryGetSession } from "./tryGetSession";
import { tryAssessRequestAccessRights } from "./tryAssessRequestAccessRights";

export async function protectRoute(route, context, protectionLevel = 1) {
	ArgumentValidator.check([...arguments]);

	const session = await tryGetSession(context);

	const accessGranted = await tryAssessRequestAccessRights(context.res, protectionLevel, session);
	if (!accessGranted) return;

	return route(context);
}
