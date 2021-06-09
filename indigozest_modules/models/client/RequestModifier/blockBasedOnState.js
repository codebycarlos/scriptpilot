export function blockBasedOnState({ requestFunction, requestState }) {
	if (!requestFunction) throw Error("No request function provided.")
	if (!requestState) throw Error("No request state provided.")

  const [ state, setState ] = requestState
	return async () => {
		try {
			if (state) return

			setState(true)

			return await requestFunction()
		} finally {
			setState(false)
		}
	}
}
