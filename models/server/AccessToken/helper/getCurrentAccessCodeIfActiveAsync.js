import { ArgumentValidator, Token } from '../_dependencies'
import { isActive } from '../isActive'
export async function getCurrentAccessCodeIfActiveAsync(tokenPath) {
  ArgumentValidator.check([...arguments])
  let token

  try {
    token = await Token.load(tokenPath)
  } catch (e) {
    throw Error(`Unable to load current access token: ${e}`)
  }

  try {
    if (await !isActive(token)) {
      return null
    }
  } catch (e) {
    throw Error(`Unable to determine if current access token is active. ${e}`)
  }

  if (!('access_token' in token)) {
    throw Error('Token does not contain access code.')
  }

  return token.access_token
}
