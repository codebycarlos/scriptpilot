import { Settings } from "./_dependencies"
export async function generateRefreshTokenPathAsync(orgId) {
	const zohoSettings = await Settings.ZohoAsync()
	const { refreshTokenPathFormat } = zohoSettings

	if (!refreshTokenPathFormat || typeof refreshTokenPathFormat !== "string") {
		throw Error("Invalid refresh token path format.")
	}

	return refreshTokenPathFormat.replace("orgId", orgId)
}
