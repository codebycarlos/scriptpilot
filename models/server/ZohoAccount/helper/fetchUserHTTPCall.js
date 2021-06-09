import { AccessToken, ArgumentValidator, CustomAxios, TokenPath } from '../_dependencies'
export async function fetchUserHTTPCall({ apiDomain, orgId, userId }) {
  ArgumentValidator.check([
    ...arguments,
    apiDomain,
    orgId,
    userId
  ])
  let accessTokenCode
  const accessTokenPath = await TokenPath.generateAccessTokenPath(orgId)
  const refreshTokenPath = await TokenPath.generateRefreshTokenPath(orgId)
  const axios = await CustomAxios()

  try {
    accessTokenCode = await AccessToken.getAccessCode({ accessTokenPath,
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
