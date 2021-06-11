import { ArgumentValidator } from './_dependencies'
import { fetchUserAsync } from './fetchUserAsync'
export async function fetchProfileAsync({ apiDomain, orgId, userId }) {
  ArgumentValidator.check([
    ...arguments,
    apiDomain,
    orgId,
    userId
  ])
  let user

  try {
    user = await fetchUserAsync({ apiDomain,
      orgId,
      userId })
  } catch (e) {
    throw Error(`Unable to fetch user. ${e}`)
  }

  if (!('profile' in user)) {
    throw Error('Unable to read profile of user.')
  }
  if (!('name' in user.profile)) {
    throw Error('Unable to read name of profile.')
  }

  return user.profile.name
}
