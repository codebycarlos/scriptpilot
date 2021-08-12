import { useState, Try, ObjectMethods } from "./_dependencies"

export function useBlockingAsyncCallbacks(callbacksObject) {
	if (!callbacksObject) throw Error("No callbacks object provided.")

	const [state, setState] = useState(false)

	return ObjectMethods.map(callbacksObject, (callback) => async (...args) => {
		if (state) return

		setState(true)

		const [response, error] = await Try(() => callback(...args))

		setState(false)

		if (error) throw error
		return response
	})
}
