import { Lambda, LambdaClientConfig } from './_dependencies'
export async function LambdaClient() {
  return new Lambda(await LambdaClientConfig())
}
