import { AccessRights } from "models/client/AccessRights"
import { PagePreparer } from "models/client/PagePreparer"
import { API } from "models/client/API"
export async function dataFetching(context) {
	const accessRights = AccessRights(context)
	const pagePreparer = PagePreparer(context)

	if ((await accessRights.meetsAccessRightsLevelAsync(2)) !== true) {
		return pagePreparer.getRedirect("/login")
	}

	const { ScriptsAPI } = await API.loadScriptsAPIAsync(context)
	const { scripts } = await ScriptsAPI.getScriptsAsync()

	return await pagePreparer.withDefaultPropsAsync({ scripts })
}
