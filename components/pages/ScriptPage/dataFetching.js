import { AccessRights } from "models/client/AccessRights"
import { PagePreparer } from "models/client/PagePreparer"
export async function dataFetching(context) {
	const accessRights = AccessRights(context)
	const pagePreparer = PagePreparer(context)

	if ((await accessRights.meetsAccessRightsLevel(2)) !== true)
		return pagePreparer.getRedirect("/login")

	return await pagePreparer.withDefaultProps()
}
