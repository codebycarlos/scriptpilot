import { Settings, ArgumentValidator, consola } from "./_dependencies"
import { AccountsCollection } from "models/server/AccountsCollection"
export async function session(session = null, user) {
	ArgumentValidator.check([user, user.id])
	console.log("checking")
	if (!session) return null

	let providerAccount, zohoSettings

	try {
		providerAccount = await AccountsCollection.findByUserId(user.id)
	} catch (e) {
		consola.error(e)
	}

	try {
		zohoSettings = await Settings.Zoho()
	} catch (e) {
		consola.error(e)
	}

	session.user.id = user.id
	session.user.orgId = zohoSettings.orgId
	session.user.providerId = providerAccount.providerId
	session.user.providerAccountId = providerAccount.providerAccountId

	return session
}
