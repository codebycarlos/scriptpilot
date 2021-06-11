import { ArgumentValidator } from './_dependencies'
import { determineAccessRightsLevelAsync } from './determineAccessRightsLevelAsync'

export async function meetsAccessRightsLevelAsync(session, accessRightsTarget) {
  ArgumentValidator.check([...arguments])

  const accessRightsLevel = await determineAccessRightsLevelAsync(session)

  return accessRightsLevel >= accessRightsTarget
}
