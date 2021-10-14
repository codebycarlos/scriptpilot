export function isEncrypted({ token }) {
	return token.encrypted === true ? true : false
}
