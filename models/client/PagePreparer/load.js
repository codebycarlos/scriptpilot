import { ClientSessionHandler } from "./_dependencies"
import { getDefaultProps } from "./getDefaultProps"
import { returnPropsIfAccessGrantedOrRedirect } from "./returnPropsIfAccessGrantedOrRedirect"
import { returnPropsIfAccessNotGrantedOrRedirect } from "./returnPropsIfAccessNotGrantedOrRedirect"
export async function load(context) {
	const session = await ClientSessionHandler.getSession(context)
	const defaultProps = await getDefaultProps(context)
	
	return {
		returnPropsIfAccessGrantedOrRedirect: ({ props, redirectPage, accessRightsTarget }) =>
			returnPropsIfAccessGrantedOrRedirect(session, {
				props: { ...defaultProps, ...props },
				redirectPage,
				accessRightsTarget,
			}),
		returnPropsIfAccessNotGrantedOrRedirect: ({ props, redirectPage, accessRightsTarget }) =>
			returnPropsIfAccessNotGrantedOrRedirect(session, {
				props: { ...defaultProps, ...props },
				redirectPage,
				accessRightsTarget,
			}),
	}
}
