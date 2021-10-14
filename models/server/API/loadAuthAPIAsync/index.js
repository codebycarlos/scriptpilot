import { getAccessRightsLevelAsync } from './getAccessRightsLevelAsync'

export async function loadAuthAPIAsync(session) {
  return {
    AuthAPI: {
      getAccessRightsLevelAsync: (...args) => getAccessRightsLevelAsync(session, ...args)
    }
  }
}
