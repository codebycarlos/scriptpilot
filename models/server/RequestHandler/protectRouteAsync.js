import { ArgumentValidator, AccessRights, JSend, Try } from "./_dependencies"

export async function protectRouteAsync(route, context, accessRightsLevel) {
	ArgumentValidator.check([context, accessRightsLevel])
	if (!route) throw Error("No route provided.")

	const [accessGranted, errorWithAccessGranted] = await Try(() =>
		AccessRights(context?.req?.headers?.authorization).meetsAccessRightsLevelAsync(
			accessRightsLevel,
		),
	)

	if (errorWithAccessGranted)
		return JSend(context.res).error({ message: "Unable to assess access rights." })

	if (accessGranted !== true)
		return JSend(context.res).error(
			{ message: "You do not hold sufficient access rights." },
			401,
		)

	return route(context.req, context.res)
}
