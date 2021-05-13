import { ArgumentValidator, ClientSessionHandler } from "./_dependencies"
export async function getDefaultProps(context) {
	ArgumentValidator.check([...arguments])

	return {
		props: {
			csrfToken: await ClientSessionHandler.getCsrfToken(context),
		},
	}
}
