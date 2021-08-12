import { Try, Crypto } from "./_dependencies"

export async function encryptAsync({ token }) {
	const [tokenValue, errorWithTokenValue] = Try(() => token[token.type])
	if (errorWithTokenValue) throw Error("Unable to read token value.")

	const [encryptedTokenValue, errorWithEncryptedTokenValue] = await Try(() =>
		Crypto.encryptAsync(tokenValue),
	)
	if (errorWithEncryptedTokenValue) throw Error("Unable to encrypt token.")

	return { ...token, [token.type]: encryptedTokenValue, encrypted: true }
}
