import { LambdaClientAsync } from './_dependencies'

export async function getAccountLimitAsync() {
  const lambdaClient = await LambdaClientAsync()
  const settings = await lambdaClient.getAccountSettingsAsync()

  if (!'AccountLimit' in settings) {
    throw Error(`Unable to read account limits in settings. ${settings} `)
  }

  return settings.AccountLimit
}
