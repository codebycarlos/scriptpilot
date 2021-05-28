export function removeExtension(path) {
	if (path.indexOf(".") !== -1) return path.slice(0, path.indexOf("."))
	return path.slice(0)
}
