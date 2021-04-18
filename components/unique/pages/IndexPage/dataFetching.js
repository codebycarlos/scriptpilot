import { getSession } from "next-auth/client";
import { ClientSession } from "models/common/ClientSession/ClientSession.js";
export async function dataFetching(context) {
	const session = await getSession(context);

	if (session) return ClientSession.getRedirect("landing");
	return ClientSession.getRedirect("login");
}
