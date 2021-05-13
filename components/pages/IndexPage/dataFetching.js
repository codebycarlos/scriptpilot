import { ClientSessionHandler } from "models/client/ClientSessionHandler"
export async function dataFetching({req, res}) {
	const Session = await ClientSessionHandler.getSession({req, res})

	return Session
		? ClientSessionHandler.getRedirect("landing")
		: ClientSessionHandler.getRedirect("login")
}
