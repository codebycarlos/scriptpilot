import { Settings } from "./_dependencies"
export async function generateAccessTokenPath(orgId) {
	const zohoSettings = await Settings.Zoho()
	const { accessTokenPathFormat } = zohoSettings
	if (!accessTokenPathFormat || typeof accessTokenPathFormat !== "string") throw Error("Invalid access token path format.")
	return accessTokenPathFormat.replace("orgId", orgId)
}
