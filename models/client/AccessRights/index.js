import { determineAccessRightsLevel } from "./determineAccessRightsLevel"
import { meetsAccessRightsLevel } from "./meetsAccessRightsLevel"
export function AccessRights(session) {
	return {
		determineAccessRightsLevel: () => determineAccessRightsLevel(session),
		meetsAccessRightsLevel: (accessRightsTarget) =>
			meetsAccessRightsLevel(session, accessRightsTarget),
	}
}
