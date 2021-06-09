import { AccessToken, TokenPath } from './_dependencies'
export async function getAccessTokenCode({ orgId }) {
  try {
    const accessTokenPath = await TokenPath.generateAccessTokenPath(orgId)
    const refreshTokenPath = await TokenPath.generateRefreshTokenPath(orgId)
    const accessTokenCode = await AccessToken.getAccessCode({
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
