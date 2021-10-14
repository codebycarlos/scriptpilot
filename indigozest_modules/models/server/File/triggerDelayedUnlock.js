import { ArgumentValidator, lockFile, Try } from "./_dependencies"
export function triggerDelayedUnlock(filePath, delayInMilliseconds = 1000) {
	ArgumentValidator.check([...arguments])

	const [output, error] = Try(() =>
		setTimeout((filePath) => lockFile.unlockSync(filePath), delayInMilliseconds, filePath),
	)

	if (error) throw Error(`Unable to create timer to trigger file unlock.`)
}
