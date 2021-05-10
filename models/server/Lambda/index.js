import { createFunction } from "./createFunction";
import { getAccountLimit } from "./getAccountLimit";
import { getAccountUsage } from "./getAccountUsage";
import { listAllFunctions } from "./listAllFunctions";
import { updateFunctionConfiguration } from "./updateFunctionConfiguration";
import { LambdaClient } from "./_dependencies";

export const Lambda = Object.assign(LambdaClient, {
	createFunction,
	getAccountLimit,
	getAccountUsage,
	listAllFunctions,
	updateFunctionConfiguration,
});
