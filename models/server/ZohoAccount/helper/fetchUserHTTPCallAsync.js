import { AccessToken, ArgumentValidator, CustomAxiosAsync, TokenPath } from '../_dependencies'
export async function fetchUserHTTPCallAsync({ apiDomain, orgId, userId }) {
  ArgumentValidator.check([
    ...arguments,
    apiDomain,
    orgId,
    userId
  ])
  let accessTokenCode
  const accessTokenPath = await TokenPath.generateAccessTokenPathAsync(orgId)
  const refreshTokenPath = await TokenPath.generateRefreshTokenPathAsync(orgId)
  const axios = await CustomAxiosAsync()

  try {
    accessTokenCode = await AccessToken.getAccessCodeAsync({ accessTokenPath,
      refreshTokenPath })
  } catch (e) {
    throw Error(`Unable to authorise request. ${e}`)
  }

  try {
    return await axios.get(`${apiDomain}/crm/v2/users/${userId}`, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Zoho-oauthtoken ${accessTokenCode}`
      }
    })
  } catch (e) {
    throw Error(`HTTP call failed. ${e}`)
  }
}
