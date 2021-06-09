import { AccountsCollection, ArgumentValidator, Log, Settings } from './_dependencies'
export async function session(session = null, user) {
  ArgumentValidator.check([
    user,
    user.id
  ])

  if (!session) {
    return null
  }

  let providerAccount; let zohoSettings

  try {
    providerAccount = await AccountsCollection.findByUserId(user.id)
  } catch (e) {
    Log.error(e)
  }

  try {
    zohoSettings = await Settings.Zoho()
  } catch (e) {
    Log.error(e)
  }

  session.user.id = user.id
  session.user.orgId = zohoSettings.orgId
  session.user.providerId = providerAccount.providerId
  session.user.providerAccountId = providerAccount.providerAccountId

  return session
}
