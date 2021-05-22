import { ArgumentValidator, AccessRights, ClientSessionHandler } from "./_dependencies"
export async function returnPropsIfAccessGrantedOrRedirect(
	session,
	{ props = {}, redirectPage = "default", accessRightsTarget },
) {
	ArgumentValidator.check([accessRightsTarget])

	if ((await AccessRights(session).meetsAccessRightsLevel(accessRightsTarget)) !== true)
		return ClientSessionHandler.getRedirect(redirectPage)

	return { props: props }
}
