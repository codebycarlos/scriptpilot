import { ArgumentValidator, Log, Try } from "./_dependencies"
import { getCurrentAccessCodeIfActiveAsync } from "./helper/getCurrentAccessCodeIfActiveAsync"
import { getNewAccessCodeAsync } from "./helper/getNewAccessCode"
export async function getAccessCodeAsync({ accessTokenPath, refreshTokenPath }) {
	ArgumentValidator.check([...arguments, accessTokenPath, refreshTokenPath])

	const [currentAccessCode, errorWithCurrentAccessCode] = await Try(() =>
		getCurrentAccessCodeIfActiveAsync({ tokenPath: accessTokenPath }),
	)
	if (errorWithCurrentAccessCode)
		Log.warn(`Unable to check current access code. ${errorWithCurrentAccessCode}`)

	if (currentAccessCode) return currentAccessCode

	const [newAccessCode, errorWithNewAccessCode] = await Try(() =>
		getNewAccessCodeAsync({ accessTokenPath, refreshTokenPath }),
	)

	if (errorWithNewAccessCode) throw Error(`Unable to get new access code.`)

	return newAccessCode
}
