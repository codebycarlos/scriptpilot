import { AccessRights, Try } from "./_dependencies"
export async function getAccessRightsLevelAsync(session) {
	const [output, error] = await Try(() => AccessRights(session).determineAccessRightsLevelAsync())

	if (error) throw Error(`Request for user access rights level failed.`)

	return output
}
