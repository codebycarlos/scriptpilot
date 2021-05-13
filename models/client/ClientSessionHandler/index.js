import { getSession } from "./getSession"
import { getCsrfToken } from "./getCsrfToken"
import { getRedirect } from "./getRedirect"
import { isAuthorised } from "./isAuthorised"

export const ClientSessionHandler = {
	getSession,
	getCsrfToken,
	getRedirect,
	isAuthorised,
}
