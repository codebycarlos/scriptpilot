import { useSnackbar, useState } from "./_dependencies"
import { request } from "./request"
import { requestWithSnackbar } from "./requestWithSnackbar"

export const useRequestHandler = () => {
	const { Snackbar } = useSnackbar()
	const requestState = useState(false)

	return {
		request: (...args) => request({ requestState }, ...args),
		requestWithSnackbar: (...args) => requestWithSnackbar({ requestState, Snackbar }, ...args),
	}
}
