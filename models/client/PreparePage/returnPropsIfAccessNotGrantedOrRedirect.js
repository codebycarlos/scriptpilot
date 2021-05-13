import { ArgumentValidator, AccessRights, ClientSessionHandler } from "./_dependencies"
export async function returnPropsIfAccessNotGrantedOrRedirect(
	props,
	redirectPage = "default",
	accessRightsLevelTarget,
) {
	ArgumentValidator.check([...arguments])

	if ((await AccessRights.meetsAccessRightsLevel(accessRightsLevelTarget)))
		return ClientSessionHandler.getRedirect(redirectPage)

	return props
}
