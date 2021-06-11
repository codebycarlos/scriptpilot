import { ArgumentValidator } from './_dependencies'
import { fetchProfileAsync } from './fetchProfileAsync'
export async function hasAnyOfProfilesAsync({ apiDomain, orgId, userId }, targetProfiles) {
  ArgumentValidator.check([
    ...arguments,
    apiDomain,
    orgId,
    userId
  ])
  let profile

  try {
    profile = await fetchProfileAsync({ apiDomain,
      orgId,
      userId })
  } catch (e) {
    throw Error(`Unable to get profile. ${e}`)
  }

  try {
    targetProfiles = targetProfiles.map((targetProfile) => targetProfile.toUpperCase())
    profile = profile.toUpperCase()
  } catch (e) {
    throw Error(`Issues capitalising profile names. ${e}`)
  }

  if (targetProfiles.includes(profile)) {
    return true
  }

  return false
}
