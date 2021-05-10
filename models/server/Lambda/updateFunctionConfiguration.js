import { LambdaClient } from "./_dependencies";

export async function updateFunctionConfiguration(updateFunctionConfigurationInput = {}) {
	if (!"Role" in createFunctionInput)
		updateFunctionConfigurationInput.Role = process.env.AWS_LAMBDA_DEFAULT_FUNCTION_ROLE_ARN;
	if (!"Runtime" in createFunctionInput)
		updateFunctionConfigurationInput.Runtime =
			process.env.AWS_LAMBDA_DEFAULT_FUNCTION_RUNTIME_IDENTIFIER;

	return await LambdaClient.updateFunctionConfiguration(updateFunctionConfigurationInput);
}
