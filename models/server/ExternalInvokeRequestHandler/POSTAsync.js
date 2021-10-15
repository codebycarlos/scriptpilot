import { JSend, Try } from "./_dependencies"
export async function POSTAsync(req, res) {
	const { ScriptsAPI } = await API.loadScriptsAPIAsync()

	if (req.query?.auth_type !== "apikey" || !req.query?.apikey)
		return JSend(res).error({ message: "Unauthorised access." }, 401)

	return JSend(res).error(
		{ message: "Sorry, external script invocation is disabled for this demo." },
		401,
	)
}
