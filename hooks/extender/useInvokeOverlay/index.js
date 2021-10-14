import {
	useState,
	useRef,
	useBlockingAsyncCallbacks,
	InvokeOverlayActions,
	InvokeOverlayInitialState,
} from "./_dependencies"

export function useInvokeOverlay() {
	const [Data, setState] = useState(InvokeOverlayInitialState)
	const DataRef = useRef()
	DataRef.current = Data

	const Actions = InvokeOverlayActions({ Data, setState })

	return {
        DataRef,
		Data,
		Actions: useBlockingAsyncCallbacks(Actions),
	}
}
