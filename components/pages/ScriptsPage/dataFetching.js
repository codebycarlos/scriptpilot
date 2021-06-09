import { AccessRights } from 'models/client/AccessRights'
import { PagePreparer } from 'models/client/PagePreparer'
import { API } from 'models/client/API'
export async function dataFetching(context) {
  const accessRights = AccessRights(context)
  const pagePreparer = PagePreparer(context)

  if (await accessRights.meetsAccessRightsLevel(2) !== true) {
    return pagePreparer.getRedirect('/login')
  }

  const { ScriptsAPI } = await API.Scripts(context)
  const { scripts } = await ScriptsAPI.getScripts()

  return await pagePreparer.withDefaultProps({ scripts })
}
