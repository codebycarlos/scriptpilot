import { ArgumentValidator, AccessRights } from "./_dependencies"
export async function assessRequestAccessRights(accessRightsTarget, session) {
	ArgumentValidator.check([accessRightsTarget])

	const accessRightsLevel = await AccessRights.determineAccessRightsLevel(session)

	if (accessRightsLevel < accessRightsTarget)
		return {
			accessGranted: false,
			message: "You do not hold sufficient access rights to perform this request.",
		}

	return { accessGranted: true }
}
