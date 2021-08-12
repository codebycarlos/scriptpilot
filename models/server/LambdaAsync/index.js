import { getAccountLimitAsync } from "./getAccountLimitAsync"
import { getAccountUsageAsync } from "./getAccountUsageAsync"
import { listAllFunctionsAsync } from "./listAllFunctionsAsync"
import { listAllVersionsByFunctionAsync } from "./listAllVersionsByFunctionAsync"
import { LambdaClientAsync } from "./_dependencies"

export async function LambdaAsync() {
	return {
		Lambda: Object.assign(await LambdaClientAsync(), {
			getAccountLimitAsync,
			getAccountUsageAsync,
			listAllFunctionsAsync,
            listAllVersionsByFunctionAsync,
		}),
	}
}
