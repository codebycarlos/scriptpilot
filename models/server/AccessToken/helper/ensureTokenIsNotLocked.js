import { ArgumentValidator, File, Token, fs, Try } from "../_dependencies"
export function ensureTokenIsNotLocked(tokenPath) {
	ArgumentValidator.check([...arguments])

	if (!fs.existsSync(tokenPath)) return

	const [fileIsLocked, errorWithFileIsLocked] = Try(() => Token.isLocked(tokenPath))
	if (errorWithFileIsLocked)
		throw Error(`Unable to check if current access token file is locked.`)

	if (!fileIsLocked) return

	const [triggerUnlock, errorWithTriggerUnlock] = Try(() => File.triggerDelayedUnlock(tokenPath))
	if (errorWithTriggerUnlock)
		throw Error(`Access token file is locked. Unable to trigger delayed file unlocking.`)

	throw Error(
		"Access token file is locked. Triggered delayed unlocking which should resolve the issue for the next request.",
	)
}
