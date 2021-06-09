import { ArgumentValidator, Settings } from './_dependencies'
import { fetchNewHTTPCall } from './helper/fetchNewHTTPCall'
export async function fetchNew(refreshToken) {
  ArgumentValidator.check([
    ...arguments,
    refreshToken.refresh_token
  ])
  let HTTPCallResponse
  const zohoSettings = await Settings.Zoho()

  try {
    HTTPCallResponse = await fetchNewHTTPCall({
      refreshTokenCode: refreshToken.refresh_token,
      accountsUrl: zohoSettings.selfClientAccountsUrl,
      clientId: zohoSettings.selfClientId,
      clientSecret: zohoSettings.selfClientSecret
    })
  } catch (e) {
    throw Error(`Unable to make HTTP call. ${e}`)
  }

  try {
    return HTTPCallResponse.data
  } catch (e) {
    throw Error(`Invalid data received. ${e}`)
  }
}
