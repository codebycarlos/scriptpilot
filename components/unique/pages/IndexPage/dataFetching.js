import { getSession } from "next-auth/client";
import { Session } from "@models/common/Session/Session.mjs";
export default async function dataFetching(context) {
	const req = context.req;
	const session = await getSession({ req });

	if (Session.isAuthorised(session)) return Session.getRedirect("landing");
	return Session.getRedirect("login");
}
