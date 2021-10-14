import {
	useState,
	useBlockingAsyncCallbacks,
	ScriptsActions,
	ScriptsEffects,
} from "./_dependencies"

export function useScripts(initialState) {
	const [state, setState] = useState(initialState)

	const Data = state
    
	const Actions = ScriptsActions({ Data, setState })

	const Effects = ScriptsEffects({ Data, Actions })

	return {
		Data,
		Actions: useBlockingAsyncCallbacks(Actions),
		Effects,
	}
}
