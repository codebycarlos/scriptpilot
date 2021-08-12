import { ArgumentValidator, fs, Try } from "./_dependencies"
export function load(targetPath) {
	ArgumentValidator.check([...arguments])

	if (!fs.existsSync(targetPath))
		throw Error(`Invalid path. File not found in path: ${targetPath}`)

	const [file, error] = Try(() => fs.readFileSync(targetPath, { encoding: "utf8" }))

	if (error) throw Error(`Unable to read file.`)

	return JSON.parse(file)
}
