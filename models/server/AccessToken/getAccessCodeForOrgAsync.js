import { TokenPath, Try } from "./_dependencies"
import { getAccessCodeAsync } from "./getAccessCodeAsync"

export async function getAccessCodeForOrgAsync(orgId) {
	const [{ accessTokenPath, refreshTokenPath }, errorWithTokenPaths] = await Try(() =>
		TokenPath.generateTokenPathsAsync(orgId),
	)

	if (errorWithTokenPaths) throw errorWithTokenPaths

	const [accessTokenCode, errorWithAccessTokenCode] = await Try(() =>
		getAccessCodeAsync({
			accessTokenPath,
			refreshTokenPath,
		}),
	)

	if (errorWithAccessTokenCode) throw errorWithAccessTokenCode

	return accessTokenCode
}
