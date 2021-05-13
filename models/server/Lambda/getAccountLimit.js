import { LambdaClient } from "./_dependencies"

export async function getAccountLimit() {
	const settings = await LambdaClient.getAccountSettings()

	if (!"AccountLimit" in settings)
		throw Error(`Unable to read account limits in settings. ${settings} `)

	return settings.AccountLimit
}
