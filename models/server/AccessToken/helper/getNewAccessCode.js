import { ArgumentValidator, Token } from '../_dependencies'
import { fetchNew } from '../fetchNew'
import { save } from '../save'
import { ensureTokenIsNotLocked } from './ensureTokenIsNotLocked'
export async function getNewAccessCode({ accessTokenPath, refreshTokenPath }) {
  ArgumentValidator.check([...arguments])
  let refreshToken
  let newToken

  try {
    await ensureTokenIsNotLocked(accessTokenPath)
  } catch (e) {
    throw Error(`Unable to ensure token access file is not locked. ${e}`)
  }

  try {
    refreshToken = await Token.load(refreshTokenPath)
  } catch (e) {
    throw Error(`Unable to load refresh token. ${e}`)
  }

  try {
    newToken = await fetchNew(refreshToken)
  } catch (e) {
    throw Error(`Unable to fetch new access token. ${e}`)
  }

  if (!('access_token' in newToken)) {
    throw Error('New token does not contain access code.')
  }

  save(newToken, accessTokenPath)

  return newToken.access_token
}
