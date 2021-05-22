import { ClientSessionHandler } from "models/client/ClientSessionHandler"
export async function dataFetching(context) {
	const session = await ClientSessionHandler.getSession(context)

	return session
		? ClientSessionHandler.getRedirect("landing")
		: ClientSessionHandler.getRedirect("login")
}
