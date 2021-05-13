import { Settings } from "./_dependencies"
export function generateAccessTokenPath(orgId) {
	return (await Settings.Zoho.accessTokenPathFormat).replace("orgId", orgId)
}
