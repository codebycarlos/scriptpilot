import { determineAccessRightsLevel } from "./determineAccessRightsLevel"
export async function meetsAccessRightsLevel(session, accessRightsTarget) {
	const accessRightsLevel = await determineAccessRightsLevel(session)
	return accessRightsLevel >= accessRightsTarget
}
