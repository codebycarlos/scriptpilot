import { ArgumentValidator, Token, Try } from "../_dependencies"
import { isActive } from "../isActive"
export async function getCurrentAccessCodeIfActiveAsync({ tokenPath }) {
	ArgumentValidator.check([...arguments])

	const [token, errorWithToken] = await Try(() => Token.load(tokenPath))

	if (errorWithToken) throw Error(`Unable to load current access token.`)

	if (!isActive(token)) return null

	return token.access_token
}
