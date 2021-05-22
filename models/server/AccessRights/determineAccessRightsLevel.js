import { AccessRightsLevels, consola } from "./_dependencies"
export async function determineAccessRightsLevel(session) {
	let levelsMetCount = 0

	try {
		for (let level in AccessRightsLevels) {
			if (!(await AccessRightsLevels[level](session))) break
			levelsMetCount++
		}
	} catch (e) {
		consola.error(e)
	}

	return levelsMetCount
}
