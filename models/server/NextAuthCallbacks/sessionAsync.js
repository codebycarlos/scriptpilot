import { AccountsCollection, ArgumentValidator, Log, Settings, Try } from "./_dependencies"
export async function sessionAsync(session, user) {
	ArgumentValidator.check([user, user.id])

	if (!session) return null

	const [providerAccount, errorWithProviderAccount] = await Try(() =>
		AccountsCollection.findByUserIdAsync(user.id),
	)
	if (errorWithProviderAccount) Log.error(errorWithProviderAccount)

	const [zohoSettings, errorWithZohoSettings] = await Try(() => Settings.ZohoAsync())
	if (errorWithZohoSettings) Log.error(errorWithZohoSettings)

	session.user.id = user?.id
	session.user.orgId = zohoSettings?.orgId
	session.user.providerId = providerAccount?.providerId
	session.user.providerAccountId = providerAccount?.providerAccountId

	return session
}
