import { AccessRights } from 'models/client/AccessRights'
import { PagePreparer } from 'models/client/PagePreparer'
import { Settings } from 'models/server/Settings'
export async function dataFetching(context) {
  const accessRights = AccessRights(context)
  const pagePreparer = PagePreparer(context)

  if (await accessRights.meetsAccessRightsLevel(1) === true) {
    return pagePreparer.getRedirect('/scripts')
  }

  const zohoSettings = await Settings.Zoho()
  const { loginCallbackUrl } = zohoSettings

  return await pagePreparer.withDefaultProps({ loginCallbackUrl })
}
