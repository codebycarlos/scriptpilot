import { Settings } from './_dependencies'
export async function generateRefreshTokenPath(orgId) {
  const zohoSettings = await Settings.Zoho()
  const { refreshTokenPathFormat } = zohoSettings

  if (!refreshTokenPathFormat || typeof refreshTokenPathFormat !== 'string') {
    throw Error('Invalid refresh token path format.')
  }

  return refreshTokenPathFormat.replace('orgId', orgId)
}
