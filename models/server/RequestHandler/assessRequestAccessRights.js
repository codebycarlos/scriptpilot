import { AccessRights, ArgumentValidator } from './_dependencies'
export async function assessRequestAccessRights(accessRightsTarget, session) {
  ArgumentValidator.check([accessRightsTarget])

  const accessRights = AccessRights(session)
  const accessRightsLevel = await accessRights.determineAccessRightsLevel(session)

  if (accessRightsLevel < accessRightsTarget) {
    return {
      accessGranted: false,
      message: 'You do not hold sufficient access rights to perform this request.'
    }
  }

  return { accessGranted: true }
}
