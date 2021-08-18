import { Try, Crypto } from "./_dependencies"

export async function encryptAsync({ token }) {
	const [tokenValue, errorWithTokenValue] = Try(() => token[token.type])
	if (errorWithTokenValue) throw Error("Unable to read token value.")

	return { ...token, [token.type]: Crypto.encryptAsync(tokenValue), encrypted: true }
}
