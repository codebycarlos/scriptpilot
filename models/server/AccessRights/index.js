import { meetsAccessRightsLevel } from "./meetsAccessRightsLevel"
import { determineAccessRightsLevel } from "./determineAccessRightsLevel"
export function AccessRights(Session) {
	return {
		meetsAccessRightsLevel: (accessRightsLevel) =>
			meetsAccessRightsLevel(Session, accessRightsLevel),
		determineAccessRightsLevel: () => determineAccessRightsLevel(Session),
	}
}
