import { LambdaClient } from './_dependencies'

export async function getAccountUsage() {
  const lambdaClient = await LambdaClient()
  const settings = await lambdaClient.getAccountSettings()

  if (!'AccountUsage' in settings) {
    throw Error(`Unable to read account usage in settings. ${settings} `)
  }

  return settings.AccountUsage
}
