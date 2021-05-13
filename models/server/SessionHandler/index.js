import { fetchCsrfToken } from "./fetchCsrfToken"
import { ClientSessionHandler } from "./_dependencies"

export const SessionHandler = {
	fetchCsrfToken,
	getSession: ClientSessionHandler.getSession,
	getCsrfToken: ClientSessionHandler.getCsrfToken,
	getRedirect: ClientSessionHandler.getRedirect,
	isAuthorised: ClientSessionHandler.isAuthorised,
}
