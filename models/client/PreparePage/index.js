import { ArgumentValidator } from "./_dependencies"
import { getDefaultProps } from "./getDefaultProps"
import { returnPropsIfAccessGrantedOrRedirect } from "./returnPropsIfAccessGrantedOrRedirect"
import { returnPropsIfAccessNotGrantedOrRedirect } from "./returnPropsIfAccessNotGrantedOrRedirect"

export function PreparePage(context) {
	ArgumentValidator.check([...arguments])
	return {
		getDefaultProps: () => getDefaultProps(context),
		returnPropsIfAccessGrantedOrRedirect: (props, redirectPage, accessRightsLevel) =>
			returnPropsIfAccessGrantedOrRedirect(context, props, redirectPage, accessRightsLevel),
		returnPropsIfAccessNotGrantedOrRedirect: (props, redirectPage, accessRightsLevel) =>
			returnPropsIfAccessNotGrantedOrRedirect(
				context,
				props,
				redirectPage,
				accessRightsLevel,
			),
	}
}
