import { AccessRights } from "models/client/AccessRights"
import { PagePreparer } from "models/client/PagePreparer"
import { API } from "models/client/API"
import { default as consola } from "consola"
export async function dataFetching(context) {
	const accessRights = AccessRights(context)
	const pagePreparer = PagePreparer(context)

	if ((await accessRights.meetsAccessRightsLevel(2)) !== true)
		return pagePreparer.getRedirect("/login")

	const scriptsAPI = await API.Scripts(context)
	let scripts = []
	try {
		scripts = await scriptsAPI.getScripts()
	} catch (e) {
		consola.error(`Unable to pre-load scripts. ${e}`)
	}

	return await pagePreparer.withDefaultProps({ scripts })
}
