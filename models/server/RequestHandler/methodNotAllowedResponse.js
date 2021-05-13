import { ArgumentValidator } from "./_dependencies"
export async function methodNotAllowedResponse(res) {
	ArgumentValidator.check([...arguments])
	return await JSend(res).failDetailed(
		{
			message: "Method not allowed.",
		},
		405,
	)
}
