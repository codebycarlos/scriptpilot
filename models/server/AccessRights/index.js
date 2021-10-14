import { determineAccessRightsLevelAsync } from "./determineAccessRightsLevelAsync"
import { meetsAccessRightsLevelAsync } from "./meetsAccessRightsLevelAsync"
export function AccessRights(session) {
	return {
		determineAccessRightsLevelAsync: () => determineAccessRightsLevelAsync(session),
		meetsAccessRightsLevelAsync: (accessRightsTarget) =>
			meetsAccessRightsLevelAsync(session, accessRightsTarget),
	}
}
