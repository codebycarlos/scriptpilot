import { PagePreparer } from "models/client/PagePreparer"
import { Settings } from "models/server/Settings"

export async function dataFetching(context) {
	const pagePreparer = await PagePreparer.load(context)

	let props = {}
	props.loginCallbackUrl = (await Settings.Zoho()).loginCallbackUrl
	props.logoPath = (await Settings.Brand()).logoPath

	return await pagePreparer.returnPropsIfAccessNotGrantedOrRedirect({
		props,
		redirectPage: "landing",
		accessRightsTarget: 1,
	})
}
