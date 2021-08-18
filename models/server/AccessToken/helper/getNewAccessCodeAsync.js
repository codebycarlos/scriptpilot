import { Token, Try } from "../_dependencies"
import { fetchNewAsync } from "../fetchNewAsync"
import { saveAsync } from "../saveAsync"

export async function getNewAccessCodeAsync() {
	const [refreshToken, errorWithRefreshToken] = await Try(() =>
		Token.loadAndDecryptAsync({ type: "refresh_token" }),
	)
	if (errorWithRefreshToken) throw Error(`Unable to load refresh token.`)

	const [newToken, errorWithNewToken] = await Try(() => fetchNewAsync(refreshToken))
	if (errorWithNewToken) throw Error(`Unable to fetch new access token.`)

	await saveAsync(newToken)

	return newToken.access_token
}
