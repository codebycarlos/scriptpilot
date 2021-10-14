import { Try, Crypto } from "./_dependencies"

export async function decryptAsync({ token }) {
	const [tokenValue, errorWithTokenValue] = Try(() => token[token.type])
	if (errorWithTokenValue) throw Error("Unable to read token value.")

	const [decryptedTokenValue, errorWithDecryptedTokenValue] = await Try(() =>
		Crypto.decryptAsync(tokenValue),
	)
	if (errorWithDecryptedTokenValue) throw Error("Unable to decrypt token.")

	return { ...token, [token.type]: decryptedTokenValue, encrypted: false }
}
