import { getAccessRightsLevel } from './getAccessRightsLevel'

export async function AuthAPI(session) {
  return {
    AuthAPI: {
      getAccessRightsLevel: (...args) => getAccessRightsLevel(session, ...args)
    }
  }
}
