import { SessionsCollection, isPast, parseJSON } from './_dependencies'
export async function isValidAsync(session) {
  if (!session) {
    return false
  }
  const sessionInDatabase = JSON.parse(JSON.stringify(await SessionsCollection.findByAccessTokenAsync(session.accessToken)))

  if (!sessionInDatabase) {
    return false
  }
  if (sessionInDatabase.userId !== session.user.id) {
    return false
  }

  return !isPast(parseJSON(sessionInDatabase.expires))
}
