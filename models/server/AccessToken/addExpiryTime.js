import { ArgumentValidator, Try } from "./_dependencies"
export function addExpiryTime(token) {
	ArgumentValidator.check([...arguments])

	let [tokenRead, errorWithTokenRead] = Try(() => JSON.parse(JSON.stringify(token)))
	if (errorWithTokenRead) throw Error(`Unable to parse token.`)

	tokenRead.expiry_time = Date.now() + tokenRead.expires_in * 1000

	return tokenRead
}
