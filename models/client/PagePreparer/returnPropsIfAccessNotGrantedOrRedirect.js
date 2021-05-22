import { ArgumentValidator, AccessRights, ClientSessionHandler } from "./_dependencies"
export async function returnPropsIfAccessNotGrantedOrRedirect(
	session,
	{ props = {}, redirectPage = "default", accessRightsTarget },
) {
	ArgumentValidator.check([accessRightsTarget])

	if (await AccessRights(session).meetsAccessRightsLevel(accessRightsTarget))
		return ClientSessionHandler.getRedirect(redirectPage)

	return { props: props }
}
