import { SessionsCollection, isPast, parseJSON } from './_dependencies'
export async function isValid(session) {
  if (!session) {
    return false
  }
  const sessionInDatabase = JSON.parse(JSON.stringify(await SessionsCollection.findByAccessToken(session.accessToken)))

  if (!sessionInDatabase) {
    return false
  }
  if (sessionInDatabase.userId !== session.user.id) {
    return false
  }

  return !isPast(parseJSON(sessionInDatabase.expires))
}
