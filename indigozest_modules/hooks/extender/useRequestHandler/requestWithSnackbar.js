import { RequestModifier } from "./_dependencies"
import { request } from "./request"

export function requestWithSnackbar({ requestState, Snackbar }, requestFunction, messages) {
	const { withSnackbarProgress } = RequestModifier

	return request(
		{
			requestState,
		},
		withSnackbarProgress({ requestFunction, Snackbar, messages }),
	)
}
