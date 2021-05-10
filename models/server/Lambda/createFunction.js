import { LambdaClient } from "./_dependencies";

export async function createFunction(createFunctionInput = {}) {
	if (!"Role" in createFunctionInput)
		createFunctionInput.Role = process.env.AWS_LAMBDA_DEFAULT_FUNCTION_ROLE_ARN;
	if (!"Runtime" in createFunctionInput)
		createFunctionInput.Runtime = process.env.AWS_LAMBDA_DEFAULT_FUNCTION_RUNTIME_IDENTIFIER;

	return LambdaClient.createFunction(createFunctionInput);
}
