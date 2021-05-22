import { AccessToken, JSend, consola, TokenPath } from "./_dependencies"
export async function GET(req, res) {
	let accessTokenCode

	const orgId = req.query.orgId
	const accessTokenPath = await TokenPath.generateAccessTokenPath(orgId)
	const refreshTokenPath = await TokenPath.generateRefreshTokenPath(orgId)

	try {
		accessTokenCode = await AccessToken.getAccessCode({ accessTokenPath, refreshTokenPath })
	} catch (e) {
		consola.error(e)
		return JSend(res).error({ message: "Request for new access token failed." })
	}

	return JSend(res).success({ data: { token: accessTokenCode } })
}
