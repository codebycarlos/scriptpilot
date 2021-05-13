import { ArgumentValidator, AccessRights } from "./_dependencies"
export async function assessRequestAccessRights(accessRightsLevelTarget, Session) {
	ArgumentValidator.check([accessRightsLevel])

	const accessRightsLevel = await AccessRights.determineAccessRightsLevel(Session)

	if (accessRightsLevel < accessRightsLevelTarget)
		return {
			accessGranted: false,
			message: "You do not hold sufficient access rights to perform this request.",
		}

	return { accessGranted: true }
}
