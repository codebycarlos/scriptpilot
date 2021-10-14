import { ArgumentValidator, Log, Path, fs, lockFile, Try } from "./_dependencies"

export function save(object, targetPath) {
	ArgumentValidator.check([...arguments])

	if (!Path.directoryExists(targetPath))
		throw Error(`Invalid path directory provided: ${directoryPath}.`)

	const [unlockFileFunction, errorWithUnlockFileFunction] = Try(() =>
		lockFile.lockSync(targetPath, { realpath: false }),
	)
	if (errorWithUnlockFileFunction)
		throw Error(
			`Unable to lock file (in order to avoid concurrency issues): ${errorWithUnlockFileFunction}.`,
		)

	Log.info(`Saving to file with path ${targetPath}`)
	fs.writeFile(targetPath, JSON.stringify(object), (e) => {
		if (unlockFileFunction) unlockFileFunction()
		if (e) throw Error(`Unable to write to file.`)
	})
}
