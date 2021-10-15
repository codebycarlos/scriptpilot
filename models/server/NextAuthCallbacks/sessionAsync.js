import { AccountsCollection, ArgumentValidator, Log, Try } from "./_dependencies"
export async function sessionAsync(session, user) {
	ArgumentValidator.check([user, user.id])

	if (!session) return null

	const [providerAccount, errorWithProviderAccount] = await Try(() =>
		AccountsCollection.findByUserIdAsync(user.id),
	)
	if (errorWithProviderAccount) Log.error(errorWithProviderAccount)

	session.user.id = user?.id
	session.user.providerId = providerAccount?.providerId
	session.user.providerAccountId = providerAccount?.providerAccountId

	return session
}
