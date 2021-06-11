export async function LambdaAsync() {
	return {
		defaultFunctionRoleArn: process.env.AWS_LAMBDA_DEFAULT_FUNCTION_ROLE_ARN,
		defaultFunctionRuntimeIdentifier:
			process.env.AWS_LAMBDA_DEFAULT_FUNCTION_RUNTIME_IDENTIFIER,
		region: process.env.AWS_LAMBDA_REGION,
		accessKeyId: process.env.AWS_LAMBDA_ACCESS_KEY_ID,
		secretAccessKey: process.env.AWS_LAMBDA_SECRET_ACCESS_KEY,
	}
}
