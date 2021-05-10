import { getPropsIfSessionActiveOrRedirect } from "./getPropsIfSessionActiveOrRedirect";
import { getPropsIfSessionInactiveOrRedirect } from "./getPropsIfSessionInactiveOrRedirect";
import { getSession } from "./getSession";
import { getCsrfToken } from "./getCsrfToken";
import { getRedirect } from "./getRedirect";
import { isAuthorised } from "./isAuthorised";

export const ClientSession = {
	getSession,
	getCsrfToken,
	getRedirect,
	isAuthorised,
	getPropsIfSessionActiveOrRedirect,
	getPropsIfSessionInactiveOrRedirect,
};
