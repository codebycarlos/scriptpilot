import { ArgumentValidator } from './_dependencies'
import { tryGetSession } from './tryGetSession'
import { tryAssessRequestAccessRightsAsync } from './tryAssessRequestAccessRightsAsync'

export async function protectRouteAsync(route, context, accessRightsLevel) {
  ArgumentValidator.check([
    context,
    accessRightsLevel
  ])
  if (!route) {
    throw Error('No route provided.')
  }

  const session = tryGetSession(context)

  const accessGranted = await tryAssessRequestAccessRightsAsync(
    context.res,
    accessRightsLevel,
    session
  )

  if (!accessGranted) {
    return
  }

  return route(context.req, context.res)
}
