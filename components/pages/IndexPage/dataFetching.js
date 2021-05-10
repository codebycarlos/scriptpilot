import { ClientSession } from "models/client/ClientSession";
export async function dataFetching(context) {
	const session = await ClientSession.getSession(context);

	if (session) return ClientSession.getRedirect("landing");
	return ClientSession.getRedirect("login");
}
