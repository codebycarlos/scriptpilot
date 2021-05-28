import { AccessRights, JSend, consola } from "./_dependencies"
export async function GET(req, res) {
	const accessRights = await AccessRights(req.headers.authorization)

	let accessRightsLevel
	try {
		accessRightsLevel = await accessRights.determineAccessRightsLevel()
	} catch (e) {
		consola.error(e)
		return JSend(res).error({ message: "Request for user access rights level failed." })
	}

	return JSend(res).success({ data: { accessRightsLevel } })
}
