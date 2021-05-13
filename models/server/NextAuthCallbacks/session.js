import { Settings } from "./_dependencies"
export async function session(Session = null, user) {
	ArgumentValidator.check([user, user.id])

	Session.User = user
	Session.User.orgId = await Settings.Zoho.orgId

	return Session
}
