import { ArgumentValidator, Log } from './_dependencies'
import { getCurrentAccessCodeIfActiveAsync } from './helper/getCurrentAccessCodeIfActiveAsync'
import { getNewAccessCodeAsync } from './helper/getNewAccessCode'
export async function getAccessCodeAsync({ accessTokenPath, refreshTokenPath }) {
  ArgumentValidator.check([
    ...arguments,
    accessTokenPath,
    refreshTokenPath
  ])
  let currentAccessCode
  let newAccessCode

  try {
    currentAccessCode = await getCurrentAccessCodeIfActiveAsync(accessTokenPath)
  } catch (e) {
    Log.warn(`Unable to check current access code. ${e}`)
  }

  if (currentAccessCode) {
    return currentAccessCode
  }

  try {
    newAccessCode = await getNewAccessCodeAsync({ accessTokenPath,
      refreshTokenPath })
  } catch (e) {
    throw Error(`Unable to get new access code. ${e}`)
  }

  return newAccessCode
}
