import { ArgumentValidator, Try } from "./_dependencies"
import { fetchProfileNameAsync } from "./fetchProfileNameAsync"

export async function hasAnyOfProfilesAsync({ apiDomain, userId }, targetProfiles) {
	ArgumentValidator.check([...arguments, apiDomain, userId])

	const [profileName, errorWithProfileName] = await Try(() =>
		fetchProfileNameAsync({ apiDomain, userId }),
	)
	if (errorWithProfileName) throw Error(`Unable to get profile.`)

	const [targetFilesUpper, errorWithTargetFilesUpper] = Try(() =>
		targetProfiles.map((targetProfile) => targetProfile.toUpperCase()),
	)
	if (errorWithTargetFilesUpper) throw Error(`Issues capitalising target profile names.`)

	return targetFilesUpper.includes(profileName.toUpperCase())
}
