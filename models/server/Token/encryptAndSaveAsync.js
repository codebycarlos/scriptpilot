import { Try } from "./_dependencies"
import { encryptAsync } from "./encryptAsync"
import { saveAsync } from "./saveAsync"

export async function encryptAndSaveAsync({ token, returnOriginal = false }) {
	const [encryptedToken, errorWithEncryptedToken] = await Try(() => encryptAsync({ token }))
	if (errorWithEncryptedToken) throw Error("Unable to encrypt token.")

	const [, errorWithSaveToken] = await Try(() => saveAsync({ token: encryptedToken }))
	if (errorWithSaveToken) throw Error("Unable to save token.")

	return returnOriginal ? token : encryptedToken
}
