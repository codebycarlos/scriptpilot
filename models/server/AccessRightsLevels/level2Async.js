import { Settings, ZohoAccount, Try } from "./_dependencies"
export async function level2Async(session) {
	if (!session || !session?.user?.id) return false

	const settings = await Settings.ZohoAsync()

	const [hasProfile, errorWithHasProfile] = await Try(() =>
		ZohoAccount.hasAnyOfProfilesAsync(
			{
				apiDomain: settings.apiDomain,
				userId: session.user.providerAccountId,
			},
			settings.authorizedProfiles,
		),
	)

	if (errorWithHasProfile) throw Error("Unable to check user has appropriate profile.")

	return hasProfile
}
