import { getAccountLimit } from "./getAccountLimit"
import { getAccountUsage } from "./getAccountUsage"
import { listAllFunctions } from "./listAllFunctions"
import { LambdaClient } from "./_dependencies"

export async function Lambda() {
	return Object.assign(await LambdaClient(), {
		getAccountLimit,
		getAccountUsage,
		listAllFunctions,
	})
}
