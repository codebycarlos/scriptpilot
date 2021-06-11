import { SessionHandler } from './_dependencies'
export async function level1Async(session) {
  return await SessionHandler.isValidAsync(session)
}
