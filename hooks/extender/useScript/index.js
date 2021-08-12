import { useState, useBlockingAsyncCallbacks, ScriptActions, ScriptEffects } from "./_dependencies"

export function useScript(initialState) {
	const [state, setState] = useState(initialState)

	const Data = state

	const Actions = ScriptActions({ Data, setState })

	const Effects = ScriptEffects({ Data, Actions })

	return {
		Data,
		Actions: useBlockingAsyncCallbacks(Actions),
		Effects,
		setState,
	}
}
