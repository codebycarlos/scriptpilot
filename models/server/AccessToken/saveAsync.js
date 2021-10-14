import { ArgumentValidator, Token } from "./_dependencies"
import { addExpiryTime } from "./addExpiryTime"
export async function saveAsync(newToken) {
	ArgumentValidator.check([...arguments])
	newToken = addExpiryTime(newToken)
	await Token.encryptAndSaveAsync({ token: { ...newToken, type: "access_token" } })
}
