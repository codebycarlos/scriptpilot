import { ArgumentValidator, lockFile, Try } from "./_dependencies"
export function isLocked(tokenPath) {
	ArgumentValidator.check([...arguments])

	const [locked, errorWithLocked] = Try(() => lockFile.checkSync(tokenPath))
	if (errorWithLocked) throw Error(`Unable to check if access token is locked.`)

	return locked
}
