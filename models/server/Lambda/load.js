import { getAccountLimit } from "./getAccountLimit"
import { getAccountUsage } from "./getAccountUsage"
import { listAllFunctions } from "./listAllFunctions"
import { LambdaClient } from "./_dependencies"

export async function load() {
	return Object.assign(await LambdaClient.load(), {
		getAccountLimit,
		getAccountUsage,
		listAllFunctions,
	})
}
