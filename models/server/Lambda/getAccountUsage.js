import { LambdaClient } from "./_dependencies"

export async function getAccountUsage() {
	const settings = await LambdaClient.getAccountSettings()

	if (!"AccountUsage" in settings)
		throw Error(`Unable to read account usage in settings. ${settings} `)

	return settings.AccountUsage
}
