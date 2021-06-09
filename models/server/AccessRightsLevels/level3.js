import { Settings, ZohoAccount } from './_dependencies'
export async function level3(session) {
  if (!session || !('user' in session) || !('id' in session.user)) {
    return false
  }

  const settings = await Settings.Zoho()

  return await ZohoAccount.hasAnyOfProfiles(
    {
      apiDomain: settings.apiDomain,
      orgId: settings.orgId,
      userId: session.user.providerAccountId
    },
    settings.administratorProfiles
  )
}
