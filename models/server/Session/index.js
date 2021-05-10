import { fetchCsrfToken } from "./fetchCsrfToken";
import { checkPermissions } from "./checkPermissions";
import { recheckPermissions } from "./recheckPermissions";
import { ClientSession } from "./_dependencies";

export const Session = {
	fetchCsrfToken,
	checkPermissions,
	recheckPermissions,
	getSession: ClientSession.getSession,
	getCsrfToken: ClientSession.getCsrfToken,
	getRedirect: ClientSession.getRedirect,
	isAuthorised: ClientSession.isAuthorised,
};
