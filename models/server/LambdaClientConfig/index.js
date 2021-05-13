import { Settings } from "./_dependencies"
export async function LambdaClientConfig() {
	const settings = await Settings.Lambda

	return {
		region: settings.region,
		credentials: {
			accessKeyId: settings.accessKeyId,
			secretAccessKey: settings.secretAccessKey,
		},
	}
}
