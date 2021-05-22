import { ArgumentValidator, ClientSessionHandler, Settings } from "./_dependencies"
export async function getDefaultProps(context) {
	ArgumentValidator.check([...arguments])
	return {
		csrfToken: await ClientSessionHandler.getCsrfToken(context),
		title: (await Settings.Brand()).appName,
		Brand: 	(await Settings.Brand())
	}
}
