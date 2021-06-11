import { ClientSessionHandler } from './_dependencies'
import { getAccessRightsLevelAsync } from './getAccessRightsLevelAsync'

export async function loadAuthAPIAsync(context) {
  const session = context
    ? await ClientSessionHandler.getSessionAsync(context)
    : null

  return {
    AuthAPI: {
      getAccessRightsLevelAsync: (...args) => getAccessRightsLevelAsync(session, ...args)
    }
  }
}
