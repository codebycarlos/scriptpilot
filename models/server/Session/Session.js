import { checkPermissions } from "./checkPermissions.js";
import { recheckPermissions } from "./recheckPermissions.js";
import { ClientSession } from "./_dependencies.js";

export const Session = {
	checkPermissions,
	recheckPermissions,
	getRedirect: ClientSession.getRedirect,
	isAuthorised: ClientSession.isAuthorised,
};
