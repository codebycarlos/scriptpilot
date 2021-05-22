import { Settings } from "./_dependencies"
export async function generateRefreshTokenPath(orgId) {
	const refreshTokenPathFormat = (await Settings.Zoho()).refreshTokenPathFormat
	if (!refreshTokenPathFormat || typeof refreshTokenPathFormat !== "string") throw Error("Invalid refresh token path format.")
	return refreshTokenPathFormat.replace("orgId", orgId)
}
