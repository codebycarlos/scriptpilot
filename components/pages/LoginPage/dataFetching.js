import { AccessRights } from "models/client/AccessRights"
import { PagePreparer } from "models/client/PagePreparer"
import { Settings } from "models/server/Settings"
import { Try } from "indigozest_modules/models/client/Try"
export async function dataFetching(context) {
	const accessRights = AccessRights(context)
	const pagePreparer = PagePreparer(context)

	const [meetsAccessRights] = await Try(() => accessRights.meetsAccessRightsLevelAsync(2))
	if (meetsAccessRights === true) return pagePreparer.getRedirect("/scripts")

	const zohoSettings = await Settings.ZohoAsync()
	const { loginCallbackUrl } = zohoSettings

	return await pagePreparer.withDefaultPropsAsync({ loginCallbackUrl })
}
