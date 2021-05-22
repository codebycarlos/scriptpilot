import { PagePreparer } from "models/client/PagePreparer"
export async function dataFetching(context) {
	const pagePreparer = await PagePreparer.load(context)

	return await pagePreparer.returnPropsIfAccessGrantedOrRedirect({
		redirectPage: "login",
		accessRightsTarget: 1,
	})
}
