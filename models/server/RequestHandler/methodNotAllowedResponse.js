import { ArgumentValidator, JSend } from "./_dependencies"
export function methodNotAllowedResponse(res) {
	ArgumentValidator.check([...arguments])

	return JSend(res).failDetailed(
		{
			message: "Method not allowed.",
		},
		405,
	)
}
