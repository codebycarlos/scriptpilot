import { Settings } from "./_dependencies"
export function generateRefreshTokenPath(orgId) {
	return (await Settings.Zoho.refreshTokenPathFormat).replace("orgId", orgId)
}
