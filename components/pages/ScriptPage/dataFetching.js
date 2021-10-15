import { AccessRights } from "models/client/AccessRights"
import { PagePreparer } from "models/client/PagePreparer"
import { API } from "models/client/API"
import { Try } from "indigozest_modules/models/client/Try"
export async function dataFetching(context) {
	const accessRights = AccessRights(context)
	const pagePreparer = PagePreparer(context)
	const query = context?.query

	const [meetsAccessRights] = await Try(() => accessRights.meetsAccessRightsLevelAsync(1))
	if (meetsAccessRights !== true) return pagePreparer.getRedirect("/login")

	const { ScriptsAPI } = await API.loadScriptsAPIAsync(context)
	const { VersionsAPI } = await API.loadVersionsAPIAsync(context)

	const [script] = await Try(() =>
		ScriptsAPI.getScriptAsync({
			FunctionName: query?.FunctionName,
			Qualifier: query?.Qualifier,
		}),
	)

	const [versions] = await Try(() =>
		VersionsAPI.getVersionsAsync({
			FunctionName: query?.FunctionName,
		}),
	)

	return await pagePreparer.withDefaultPropsAsync({
		script,
		versions,
	})
}
