import { Log, Try } from "./_dependencies"
import { getCurrentAccessCodeIfActiveAsync } from "./helper/getCurrentAccessCodeIfActiveAsync"
import { getNewAccessCodeAsync } from "./helper/getNewAccessCode"
export async function getAccessCodeAsync() {
	const [currentAccessCode, errorWithCurrentAccessCode] = await Try(() =>
		getCurrentAccessCodeIfActiveAsync(),
	)
	if (errorWithCurrentAccessCode)
		Log.warn(`Unable to check current access code. ${errorWithCurrentAccessCode}`)

	if (currentAccessCode) return currentAccessCode

	const [newAccessCode, errorWithNewAccessCode] = await Try(() => getNewAccessCodeAsync())

	if (errorWithNewAccessCode) throw Error(`Unable to get new access code.`)

	return newAccessCode
}
