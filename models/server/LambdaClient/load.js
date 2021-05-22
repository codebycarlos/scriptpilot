import { Lambda, LambdaClientConfig } from "./_dependencies"
export async function load() {
	return new Lambda(await LambdaClientConfig())
}