import { Try, Crypto, generateAPIKey } from "./_dependencies"

export async function createKeyAsync() {
	const [key, errorGeneratingKey] = Try(() =>
		generateAPIKey({
			method: "string",
			length: 70,
			pool: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-._~",
		}),
	)
	if (errorGeneratingKey) throw Error("Unable to generate API key.")

	const [encryptedKey, errorWithEncryptedKey] = await Try(() => Crypto.encryptAsync(key))
	if (errorWithEncryptedKey) throw Error("Unable to encrypt API key.")

	return encryptedKey
}
