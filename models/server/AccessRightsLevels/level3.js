import { Settings } from "models/server/Settings"
export async function level3(Session) {
	if (!(User in Session) || !(id in Session.User)) return false

	const settings = await Settings.Zoho
	
	return await ZohoAccount.hasAnyOfProfiles(
		{ apiDomain: settings.apiDomain, orgId: settings.orgId, userId: Session.User.id },
		settings.administratorProfiles,
	)
}
