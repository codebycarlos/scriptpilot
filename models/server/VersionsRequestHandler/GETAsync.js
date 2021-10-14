import { API, JSend, Try } from "./_dependencies"
export async function GETAsync(req, res) {
	const { VersionsAPI } = await API.loadVersionsAPIAsync()

	const [versions, error] = await Try(() => VersionsAPI.getVersionsAsync(req.query))

	if (error) return JSend(res).error({ message: error?.message })

	return JSend(res).success({ data: { versions } })
}
