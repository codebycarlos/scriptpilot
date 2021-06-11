import { Lambda, LambdaClientConfigAsync } from "./_dependencies"
export async function LambdaClientAsync() {
	return new Lambda(await LambdaClientConfigAsync())
}
