import { determineAccessRightsLevel } from "./determineAccessRightsLevel"
export async function meetsAccessRightsLevel(accessRightsLevelTarget) {
    const accessRightsLevel = await determineAccessRightsLevel()
    return accessRightsLevel >= accessRightsLevelTarget
}