import { ArgumentValidator, Token, Try } from "../_dependencies"
import { fetchNewAsync } from "../fetchNewAsync"
import { save } from "../save"
import { ensureTokenIsNotLocked } from "./ensureTokenIsNotLocked"
import { updateAwait } from "typescript"
export async function getNewAccessCodeAsync({ accessTokenPath, refreshTokenPath }) {
	ArgumentValidator.check([...arguments])

	const [ensureTokenUnlocked, errorWithEnsureTokenUnlocked] = Try(() =>
		ensureTokenIsNotLocked(accessTokenPath),
	)
	if (errorWithEnsureTokenUnlocked)
		throw Error(`Unable to ensure token access file is not locked.`)

	const [refreshToken, errorWithRefreshToken] = Try(() => Token.load(refreshTokenPath))
	if (errorWithRefreshToken) throw Error(`Unable to load refresh token.`)

	const [newToken, errorWithNewToken] = await Try(() => fetchNewAsync(refreshToken))
	if (errorWithNewToken) throw Error(`Unable to fetch new access token.`)

	save(newToken, accessTokenPath)

	return newToken.access_token
}
