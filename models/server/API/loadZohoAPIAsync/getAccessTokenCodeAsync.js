import { AccessToken, TokenPath } from './_dependencies'
export async function getAccessTokenCodeAsync({ orgId }) {
  try {
    const accessTokenPath = await TokenPath.generateAccessTokenPathAsync(orgId)
    const refreshTokenPath = await TokenPath.generateRefreshTokenPathAsync(orgId)
    const accessTokenCode = await AccessToken.getAccessCodeAsync({
      accessTokenPath,
      refreshTokenPath
    })

    return { accessTokenCode,
      error: null,
      message: null }
  } catch (e) {
    return {
      accessTokenCode: null,
      error: e,
      message: 'Request for new access token failed.'
    }
  }
}
