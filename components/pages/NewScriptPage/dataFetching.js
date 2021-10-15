import { AccessRights } from "models/client/AccessRights"
import { PagePreparer } from "models/client/PagePreparer"
import { Try } from "indigozest_modules/models/client/Try"
export async function dataFetching(context) {
	const accessRights = AccessRights(context)
	const pagePreparer = PagePreparer(context)

	const [meetsAccessRights] = await Try(() => accessRights.meetsAccessRightsLevelAsync(1))
	if (meetsAccessRights !== true) return pagePreparer.getRedirect("/login")

	return await pagePreparer.withDefaultPropsAsync()
}
