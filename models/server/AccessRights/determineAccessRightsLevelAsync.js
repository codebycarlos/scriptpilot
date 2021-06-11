import { AccessRightsLevels, Log } from './_dependencies'
export async function determineAccessRightsLevelAsync(session) {
  let levelsMetCount = 0

  try {
    for (const level in AccessRightsLevels) {
      if (!await AccessRightsLevels[level](session)) {
        break
      }
      levelsMetCount++
    }
  } catch (e) {
    Log.error(e)
  }

  return levelsMetCount
}
