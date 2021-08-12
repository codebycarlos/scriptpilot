import { AccessRightsLevels, Try } from "./_dependencies"
export async function countAccessRightsLevelsMetAsync(session) {
	let levelsMetCount = 0

	for (let level in AccessRightsLevels) {
		const [levelMet] = await Try(() => AccessRightsLevels[level](session))

		if (levelMet !== true) break

		levelsMetCount++
	}

	return levelsMetCount
}
