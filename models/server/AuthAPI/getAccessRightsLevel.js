import { AccessRights } from './_dependencies'
export async function getAccessRightsLevel(session) {
  try {
    const accessRights = await AccessRights(session)
    const accessRightsLevel = await accessRights.determineAccessRightsLevel()

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
