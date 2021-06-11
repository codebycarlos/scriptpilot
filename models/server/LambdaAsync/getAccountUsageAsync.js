import { LambdaClientAsync } from './_dependencies'

export async function getAccountUsageAsync() {
  const lambdaClient = await LambdaClientAsync()
  const settings = await lambdaClient.getAccountSettingsAsync()

  if (!'AccountUsage' in settings) {
    throw Error(`Unable to read account usage in settings. ${settings} `)
  }

  return settings.AccountUsage
}
