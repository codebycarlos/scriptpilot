import { AccessRights } from 'models/client/AccessRights'
import { PagePreparer } from 'models/client/PagePreparer'
export async function dataFetching(context) {
  const accessRights = AccessRights(context)
  const pagePreparer = PagePreparer(context)

  if (await accessRights.meetsAccessRightsLevel(1) !== true) {
    return pagePreparer.getRedirect('/scripts')
  }

  return pagePreparer.getRedirect('/login')
}
