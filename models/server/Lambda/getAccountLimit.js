import { LambdaClient } from "./_dependencies"

export async function getAccountLimit() {
	const lambdaClient = await LambdaClient.load()
	const settings = await lambdaClient.getAccountSettings()

	if (!"AccountLimit" in settings)
		throw Error(`Unable to read account limits in settings. ${settings} `)

	return settings.AccountLimit
}
