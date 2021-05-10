import { ClientSession } from "models/client/ClientSession";
export async function dataFetching(context) {
	return await ClientSession.getPropsIfSessionInactiveOrRedirect(context, "landing");
}
