import { getAccountLimit } from "./getAccountLimit"
import { getAccountUsage } from "./getAccountUsage"
import { listAllFunctions } from "./listAllFunctions"
import { LambdaClient } from "./_dependencies"

export const Lambda = Object.assign(LambdaClient, {
	getAccountLimit,
	getAccountUsage,
	listAllFunctions,
})
