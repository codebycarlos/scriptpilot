import { ArgumentValidator } from './_dependencies'
import { fetchUserHTTPCallAsync } from './helper/fetchUserHTTPCallAsync'

export async function fetchUserAsync({ apiDomain, orgId, userId }) {
  ArgumentValidator.check([
    ...arguments,
    apiDomain,
    orgId,
    userId
  ])
  let HTTPCallResponse

  try {
    HTTPCallResponse = await fetchUserHTTPCallAsync({
      apiDomain,
      orgId,
      userId
    })
  } catch (e) {
    throw Error(`Unable to make HTTP call. ${e}`)
  }

  try {
    return HTTPCallResponse.data.users[0]
  } catch (e) {
    throw Error(`Invalid data received. ${e}`)
  }
}
