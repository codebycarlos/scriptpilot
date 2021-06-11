import { Settings } from "./_dependencies"
export async function LambdaClientConfigAsync() {
	const settings = await Settings.LambdaAsync()

	return {
		region: settings.region,
		credentials: {
			accessKeyId: settings.accessKeyId,
			secretAccessKey: settings.secretAccessKey,
		},
	}
}
