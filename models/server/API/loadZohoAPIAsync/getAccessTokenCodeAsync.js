import { AccessToken, Try } from "./_dependencies"
export async function getAccessTokenCodeAsync() {
	const [accessTokenCode, errorWithAccessTokenCode] = await Try(() =>
		AccessToken.getAccessCodeAsync(),
	)

	if (errorWithAccessTokenCode) throw Error("Request for new access token failed.")

	return accessTokenCode
}
