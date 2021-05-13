import { ArgumentValidator, AccessRights, JSend, consola } from "./_dependencies"
export async function GET({ req, res }) {
	ArgumentValidator.check([req, res])

	let accessRights

	try {
		accessRights = await AccessRights.determineAccessRightsLevel({ req, res })
	} catch (e) {
		consola.error(e)
		return JSend(res).error({ message: "Request for user access rights failed." })
	}

	return JSend(res).success({ data: { accessRights } })
}
