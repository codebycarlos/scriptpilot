import { PreparePage } from "models/client/PreparePage"
export async function dataFetching(context) {
	const props = await PreparePage(context).getDefaultProps()
	
	return PreparePage(context).returnPropsIfAccessGrantedOrRedirect(props, "login", 1)
}
