import { ArgumentValidator, AWSLambdaClient, paginateListFunctions } from "./_dependencies.js";

export async function listAllFunctionsPaginated(config = { FunctionVersion: "ALL" }) {
	ArgumentValidator.check([...arguments]);

	return await paginateListFunctions({ client: AWSLambdaClient }, config);
}
