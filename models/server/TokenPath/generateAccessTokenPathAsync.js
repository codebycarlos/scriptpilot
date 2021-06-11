import { Settings } from "./_dependencies"
export async function generateAccessTokenPathAsync(orgId) {
	const zohoSettings = await Settings.ZohoAsync()
	const { accessTokenPathFormat } = zohoSettings

	if (!accessTokenPathFormat || typeof accessTokenPathFormat !== "string") {
		throw Error("Invalid access token path format.")
	}

	return accessTokenPathFormat.replace("orgId", orgId)
}
