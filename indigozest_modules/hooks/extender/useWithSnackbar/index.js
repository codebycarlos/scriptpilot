import { useSnackbar, Try } from "./_dependencies"

export function useWithSnackbar(callback, { messages }) {
	const { Snackbar } = useSnackbar()
	return async (...args) => {
		Snackbar.initial(messages?.initial ?? "Processing request.")

		const [response, error] = await Try(() => callback(...args))

		if (error) return Snackbar.error(messages?.error ?? error.message ?? "Request failed.")

		Snackbar.success(messages?.success ?? "Done.")
	}
}
