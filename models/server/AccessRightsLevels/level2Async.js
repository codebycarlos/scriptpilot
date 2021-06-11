import { Settings, ZohoAccount } from "./_dependencies"
export async function level2Async(session) {
	if (!session || !("user" in session) || !("id" in session.user)) {
		return false
	}

	const settings = await Settings.ZohoAsync()

	return await ZohoAccount.hasAnyOfProfilesAsync(
		{
			apiDomain: settings.apiDomain,
			orgId: settings.orgId,
			userId: session.user.providerAccountId,
		},
		settings.authorizedProfiles,
	)
}
