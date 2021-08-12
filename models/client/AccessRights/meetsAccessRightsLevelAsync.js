import { Try } from "./_dependencies"
import { determineAccessRightsLevelAsync } from "./determineAccessRightsLevelAsync"
export async function meetsAccessRightsLevelAsync(session, accessRightsTarget) {
	if (!accessRightsTarget) throw Error("No target access level provided.")

	const [accessRightsLevel, error] = await Try(() => determineAccessRightsLevelAsync(session))
	if (error) throw Error("Unable to determine access rights level.")

	return accessRightsLevel >= accessRightsTarget
}
