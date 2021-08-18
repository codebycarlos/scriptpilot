import { Try } from "./_dependencies"
import { loadAsync } from "./loadAsync"
import { isEncrypted } from "./isEncrypted"
import { decryptAsync } from "./decryptAsync"
import { encryptAndSaveAsync } from "./encryptAndSaveAsync"
import { tokenValueIsValid } from "./tokenValueIsValid"

export async function loadAndDecryptAsync({ type }) {
	const [token, errorWithLoadingToken] = await Try(() => loadAsync({ type }))
	if (errorWithLoadingToken) throw Error("Unable to load token from database.")

	if (!tokenValueIsValid({ token })) throw Error("Token value is not valid.")

	const [tokenIsEncrypted, errorWithTokenIsEncrypted] = Try(() => isEncrypted({ token }))
	if (errorWithTokenIsEncrypted) throw Error("Unable to check if token is encrypted.")

	return tokenIsEncrypted
		? await decryptAsync({ token })
		: await encryptAndSaveAsync({ token, returnOriginal: true })
}
