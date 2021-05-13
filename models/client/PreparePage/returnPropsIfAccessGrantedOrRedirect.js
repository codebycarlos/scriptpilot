import { ArgumentValidator, AccessRights, ClientSessionHandler } from "./_dependencies"
export async function returnPropsIfAccessGrantedOrRedirect(
	props,
	redirectPage = "default",
	accessRightsLevelTarget,
) {
	ArgumentValidator.check([...arguments])

	if ((await AccessRights.meetsAccessRightsLevel(accessRightsLevelTarget)) !== true)
		return ClientSessionHandler.getRedirect(redirectPage)

	return props
}
