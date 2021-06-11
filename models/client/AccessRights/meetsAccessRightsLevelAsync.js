import { determineAccessRightsLevelAsync } from './determineAccessRightsLevelAsync'
export async function meetsAccessRightsLevelAsync(session, accessRightsTarget) {
  const { accessRightsLevel } = await determineAccessRightsLevelAsync(session)

  return accessRightsLevel >= accessRightsTarget
}
