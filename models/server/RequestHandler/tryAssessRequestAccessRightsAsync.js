import { ArgumentValidator, JSend, Log } from './_dependencies'
import { assessRequestAccessRightsAsync } from './assessRequestAccessRightsAsync'

export async function tryAssessRequestAccessRightsAsync(res, accessRightsLevel, session) {
  ArgumentValidator.check([accessRightsLevel])
  let requestAccessRightsAssessment

  try {
    requestAccessRightsAssessment = await assessRequestAccessRightsAsync(accessRightsLevel, session)
  } catch (e) {
    Log.error(e)
    JSend(res).error({ message: 'You do not hold sufficient access rights to perform this request.' }, 401)

    return false
  }

  if (requestAccessRightsAssessment.accessGranted !== true) {
    JSend(res).error({ message: requestAccessRightsAssessment.message }, 401)

    return false
  }

  return true
}
