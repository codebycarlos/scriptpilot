import { ArgumentValidator, Token, Try } from "../_dependencies"
import { isActive } from "../isActive"
export async function getCurrentAccessCodeIfActiveAsync() {
	ArgumentValidator.check([...arguments])

	const [token, errorWithToken] = await Try(() =>
		Token.loadAndDecryptAsync({ type: "access_token" }),
	)

	if (errorWithToken) throw Error(`Unable to load current access token.`)
	if (!isActive(token)) return null

	return token.access_token
}
