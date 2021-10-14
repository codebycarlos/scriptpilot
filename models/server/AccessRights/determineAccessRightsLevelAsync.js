import { Try } from "./_dependencies"
import { countAccessRightsLevelsMetAsync } from "./countAccessRightsLevelsMetAsync"

export async function determineAccessRightsLevelAsync(session) {
	const [levelsMetCount, errorWithLevelsMetCount] = await Try(() =>
		countAccessRightsLevelsMetAsync(session),
	)
	if (errorWithLevelsMetCount) throw Error(`Unable to count access rights levels met.`)

	return levelsMetCount
}
