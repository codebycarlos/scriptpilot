class SnackbarHandlerDefinition {
	#snackBar = {
		enqueueSnackbar: () => {},
		closeSnackbar: () => {},
	}

	setSnackBar(enqueueSnackbar, closeSnackbar) {
		this.#snackBar.enqueueSnackbar = enqueueSnackbar
		this.#snackBar.closeSnackbar = closeSnackbar
	}

	closeSnackbar(key) {
		this.#snackBar.closeSnackbar(key)
	}

	enqueueSnackbar(message, options) {
        this.#snackBar.enqueueSnackbar(
            message,
            options
        )
	}
}

export const SnackbarHandler = new SnackbarHandlerDefinition()
