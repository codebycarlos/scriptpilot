import { ArgumentValidator } from "./_dependencies"
import { determineAccessRightsLevel } from "./determineAccessRightsLevel"
export async function meetsAccessRightsLevel(Session, accessRightsTarget) {
	ArgumentValidator.check([...arguments])

	const accessRightsLevel = await determineAccessRightsLevel(session)

	return accessRightsLevel >= accessRightsTarget
}
