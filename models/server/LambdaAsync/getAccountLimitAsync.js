import { LambdaClientAsync } from './_dependencies'

export async function getAccountLimitAsync() {
  const lambdaClient = await LambdaClientAsync()
  const settings = await lambdaClient.getAccountSettingsAsync()

  return settings.AccountLimit
}
