import {
	AWSLambdaClient,
	GetAccountSettingsCommand,
	throwErrorIfHttpStatusUnsuccessful,
} from "./_dependencies.js";

export async function getAccountSettings() {
	const command = new GetAccountSettingsCommand();

	const data = await AWSLambdaClient.send(command);

	throwErrorIfHttpStatusUnsuccessful(data);

	return data;
}
