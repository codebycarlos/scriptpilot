import { AccessToken, Try } from "./_dependencies"
export async function getAccessTokenCodeAsync({ orgId }) {
	const [accessTokenCode, errorWithAccessTokenCode] = await Try(() =>
		AccessToken.getAccessCodeForOrgAsync(orgId),
	)

	if (errorWithAccessTokenCode) throw Error("Request for new access token failed.")

	return accessTokenCode
}
