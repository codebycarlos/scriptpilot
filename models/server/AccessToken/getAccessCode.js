import { ArgumentValidator, Log } from './_dependencies'
import { getCurrentAccessCodeIfActive } from './helper/getCurrentAccessCodeIfActive'
import { getNewAccessCode } from './helper/getNewAccessCode'
export async function getAccessCode({ accessTokenPath, refreshTokenPath }) {
  ArgumentValidator.check([
    ...arguments,
    accessTokenPath,
    refreshTokenPath
  ])
  let currentAccessCode
  let newAccessCode

  try {
    currentAccessCode = await getCurrentAccessCodeIfActive(accessTokenPath)
  } catch (e) {
    Log.warn(`Unable to check current access code. ${e}`)
  }

  if (currentAccessCode) {
    return currentAccessCode
  }

  try {
    newAccessCode = await getNewAccessCode({ accessTokenPath,
      refreshTokenPath })
  } catch (e) {
    throw Error(`Unable to get new access code. ${e}`)
  }

  return newAccessCode
}
