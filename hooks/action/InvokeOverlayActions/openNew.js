import { InvokeOverlayInitialState } from "./_dependencies"

export function openNew({ setState }, { script, invokeCallback }) {
	setState({ ...InvokeOverlayInitialState, script, invokeCallback, open: true })
}
