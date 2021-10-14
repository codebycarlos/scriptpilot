import { useState, Try } from "./_dependencies"
export function useBlockingAsyncCallback(callback) {
	if (!callback) throw Error("No callback provided.")

	const [state, setState] = useState(false)

	return async (...args) => {
		if (state) return

		setState(true)

		const [response, error] = await Try(() => callback(...args))
		
		setState(false)

		if (error) throw error
		return response
	}
}