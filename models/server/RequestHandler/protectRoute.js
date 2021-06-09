import { ArgumentValidator } from './_dependencies'
import { tryGetSession } from './tryGetSession'
import { tryAssessRequestAccessRights } from './tryAssessRequestAccessRights'

export async function protectRoute(route, context, accessRightsLevel) {
  ArgumentValidator.check([
    context,
    accessRightsLevel
  ])
  if (!route) {
    throw Error('No route provided.')
  }

  const session = tryGetSession(context)

  const accessGranted = await tryAssessRequestAccessRights(
    context.res,
    accessRightsLevel,
    session
  )

  if (!accessGranted) {
    return
  }

  return route(context.req, context.res)
}
