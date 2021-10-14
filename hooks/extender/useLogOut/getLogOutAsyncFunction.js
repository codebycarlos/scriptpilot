import { Try } from "./_dependencies"
import { getLogOutUrlAsync } from "./getLogOutUrlAsync"

export function getLogOutAsyncFunction({ router, callbackUrl }) {
	return async () => {
		const [validatedUrl, error] = await Try(() => getLogOutUrlAsync(callbackUrl))

		if (error) return

		await router.push(validatedUrl)
	}
}
