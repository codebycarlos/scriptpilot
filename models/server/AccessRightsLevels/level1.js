import { SessionHandler } from './_dependencies'
export async function level1(session) {
  return await SessionHandler.isValid(session)
}
