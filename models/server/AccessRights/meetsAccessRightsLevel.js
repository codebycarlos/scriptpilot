import { ArgumentValidator, consola } from "./_dependencies"
import { determineAccessRightsLevel } from "./determineAccessRightsLevel"
export async function meetsAccessRightsLevel(Session, accessRightsLevelTarget) {
	ArgumentValidator.check([...arguments])

	const accessRightsLevel = await determineAccessRightsLevel(Session)

	return accessRightsLevel >= accessRightsLevelTarget
}
