import {
	useState,
	useBlockingAsyncCallbacks,
	VersionsActions,
	VersionsEffects,
} from "./_dependencies"

export function useVersions(initialState) {
	const [state, setState] = useState(initialState)

	const Data = state

	const Actions = VersionsActions({ Data, setState })

	const Effects = VersionsEffects({ Data, Actions })

	return {
		Data,
		Actions: useBlockingAsyncCallbacks(Actions),
		Effects,
	}
}
