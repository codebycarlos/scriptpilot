import { ArgumentValidator, JSend } from "./_dependencies"
import { GET } from "./GET"
export async function resolve(req, res) {
	ArgumentValidator.check([...arguments])

	if (req.method == "GET") return await GET({req, res})
	return JSend(res).failDetailed(
		{
			message: "Method not allowed.",
		},
		405,
	)
}
