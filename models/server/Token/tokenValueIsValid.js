export function tokenValueIsValid({ token }) {
	if (!token) return false
	if (!("type" in token)) return false
	if (token[token.type] === "") return false
	if (JSON.stringify(token[token.type]) === JSON.stringify({})) return false
	return true
}
