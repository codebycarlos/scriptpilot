import { getSession } from "./getSession";
import { getRedirect } from "./getRedirect";
import { getCsrfToken } from "./getCsrfToken";
export async function getPropsIfSessionActiveOrRedirect(
	context,
	redirectPage = "default",
	additionalProps = {}
) {
	if (!context) throw Error("No context provided.");

	const session = await getSession(context);

	if (!session) return getRedirect(redirectPage);

	return {
		props: {
			csrfToken: await getCsrfToken(context),
			...additionalProps,
		},
	};
}
