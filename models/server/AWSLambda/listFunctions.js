import {
	ArgumentValidator,
	AWSLambdaClient,
	ListFunctionsCommand,
	throwErrorIfHttpStatusUnsuccessful,
} from "./_dependencies.js";

export async function listFunctions(config = { FunctionVersion: "ALL" }) {
	ArgumentValidator.check([...arguments]);

	const command = new ListFunctionsCommand(config);

	const data = await AWSLambdaClient.send(command);

	throwErrorIfHttpStatusUnsuccessful(data);

	return data;
}
