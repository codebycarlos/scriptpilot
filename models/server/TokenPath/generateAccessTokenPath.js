import { Settings } from "./_dependencies"
export async function generateAccessTokenPath(orgId) {
	const accessTokenPathFormat = (await Settings.Zoho()).accessTokenPathFormat
	if (!accessTokenPathFormat || typeof accessTokenPathFormat !== "string") throw Error("Invalid access token path format.")
	return accessTokenPathFormat.replace("orgId", orgId)
}
