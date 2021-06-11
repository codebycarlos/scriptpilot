import { AccessRights } from './_dependencies'
export async function getAccessRightsLevelAsync(session) {
  try {
    const accessRights = AccessRights(session)
    const accessRightsLevel = await accessRights.determineAccessRightsLevelAsync()

    return { accessRightsLevel,
      error: null,
      message: null }
  } catch (e) {
    return {
      accessRightsLevel: null,
      error: e,
      message: 'Request for user access rights level failed.'
    }
  }
}
