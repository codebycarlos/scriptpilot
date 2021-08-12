import { ArgumentValidator, Try } from "./_dependencies"
import { fetchProfileNameAsync } from "./fetchProfileNameAsync"

export async function hasAnyOfProfilesAsync({ apiDomain, orgId, userId }, targetProfiles) {
	ArgumentValidator.check([...arguments, apiDomain, orgId, userId])

	const [profileName, errorWithProfileName] = await Try(() =>
		fetchProfileNameAsync({ apiDomain, orgId, userId }),
	)
	if (errorWithProfileName) throw Error(`Unable to get profile. ${e}`)

	const [targetFilesUpper, errorWithTargetFilesUpper] = Try(() =>
		targetProfiles.map((targetProfile) => targetProfile.toUpperCase()),
	)
	if (errorWithTargetFilesUpper) throw Error(`Issues capitalising target profile names.`)

	return targetFilesUpper.includes(profileName.toUpperCase())
}
