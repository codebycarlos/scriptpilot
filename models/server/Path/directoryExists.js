import { ArgumentValidator, fs, Try } from "./_dependencies"
export function directoryExists(fullPath) {
	ArgumentValidator.check([...arguments])

	const directoryPath = fullPath.match(/(.*)[\/\\]/)[1]

	const [exists, errorWithExists] = Try(() => fs.existsSync(directoryPath))
	if (errorWithExists)
		throw Error(`Unable to check if directory path exists for path: ${directoryPath}.`)

	return exists
}
