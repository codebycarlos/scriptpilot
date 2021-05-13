import { ArgumentValidator } from "./_dependencies"
import { getCurrentAccessCodeIfActive } from "./helper/getCurrentAccessCodeIfActive"
import { getNewAccessCode } from "./helper/getNewAccessCode"
export async function getAccessCode({ accessTokenPath, refreshaccessTokenPath }) {
	ArgumentValidator.check([...arguments, accessTokenPath, refreshaccessTokenPath])
	let currentAccessCode
	let newAccessCode

	try {
		currentAccessCode = await getCurrentAccessCodeIfActive(accessTokenPath)
	} catch (e) {
		consola.warn(`Unable to check current access code. ${e}`)
	}

	if (currentAccessCode) return currentAccessCode

	try {
		newAccessCode = await getNewAccessCode(accessTokenPath, refreshaccessTokenPath)
	} catch (e) {
		throw Error(`Unable to get new access code. ${e}`)
	}

	return newAccessCode
}
