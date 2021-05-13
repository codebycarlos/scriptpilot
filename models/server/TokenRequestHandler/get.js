import { ArgumentValidator, AccessToken, JSend, consola, TokenPath } from "./_dependencies"
export async function GET({ req, res }) {
	ArgumentValidator.check([req, res, req.query.orgId])
	let accessToken

	const orgId = req.query.orgId;
	const accessTokenPath = TokenPath.generateAccessTokenPath(orgId)
	const refreshTokenPath = TokenPath.generateRefreshTokenPath(orgId)

	try {
		token = await AccessToken.getAccessCode(accessTokenPath, refreshTokenPath)
	} catch (e) {
		consola.error(e)
		return JSend(res).error({ message: "Request for new access token failed." })
	}

	return JSend(res).success({ data: { token: accessToken } })
}
