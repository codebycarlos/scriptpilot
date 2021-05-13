import { PreparePage } from "models/client/PreparePage"
import { Settings } from "models/server/Settings"
export async function dataFetching(context) {
	const props = await PreparePage(context).getDefaultProps()
	props.loginCallbackUrl = await Settings.Core.loginCallbackUrl
	props.logoPath = await Settings.Brand.logoPath

	return PreparePage(context).returnPropsIfAccessNotGrantedOrRedirect(props, "landing", 1)
}
