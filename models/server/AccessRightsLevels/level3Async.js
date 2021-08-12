import { Settings, ZohoAccount, Try } from "./_dependencies"
export async function level3Async(session) {
	if (!session || !session?.user?.id) return false

	const settings = await Settings.ZohoAsync()

	const [hasProfile, errorWithHasProfile] = await Try(() =>
		ZohoAccount.hasAnyOfProfilesAsync(
			{
				apiDomain: settings.apiDomain,
				orgId: settings.orgId,
				userId: session.user.providerAccountId,
			},
			settings.administratorProfiles,
		),
	)

	if (errorWithHasProfile) throw Error("Unable to check user has appropriate profile.")

	return hasProfile
}
