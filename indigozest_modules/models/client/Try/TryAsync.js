import { consola } from "./_dependencies"
export async function TryAsync(promise) {
	try {
		const response = await promise

		return [response, null]
	} catch (e) {
		consola.error(e)
		return [null, e]
	}
}
