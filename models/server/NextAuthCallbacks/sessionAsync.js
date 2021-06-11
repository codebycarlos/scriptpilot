import { AccountsCollection, ArgumentValidator, Log, Settings } from "./_dependencies"
export async function sessionAsync(session = null, user) {
	ArgumentValidator.check([user, user.id])

	if (!session) {
		return null
	}

	let providerAccount
	let zohoSettings

	try {
		providerAccount = await AccountsCollection.findByUserIdAsync(user.id)
	} catch (e) {
		Log.error(e)
	}

	try {
		zohoSettings = await Settings.ZohoAsync()
	} catch (e) {
		Log.error(e)
	}

	session.user.id = user.id
	session.user.orgId = zohoSettings.orgId
	session.user.providerId = providerAccount.providerId
	session.user.providerAccountId = providerAccount.providerAccountId

	return session
}
