import { ArgumentValidator } from './_dependencies'
import { fetchUserHTTPCall } from './helper/fetchUserHTTPCall'

export async function fetchUser({ apiDomain, orgId, userId }) {
  ArgumentValidator.check([
    ...arguments,
    apiDomain,
    orgId,
    userId
  ])
  let HTTPCallResponse

  try {
    HTTPCallResponse = await fetchUserHTTPCall({
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
