import { open } from "./open"
import { openNew } from "./openNew"
import { close } from "./close"
import { setOutput } from "./setOutput"
export function InvokeOverlayActions({ Data, setState }) {
	if (!setState) throw Error("No state setter provided.")

	return {
		open: (...args) => open({ Data, setState }, ...args),
		openNew: (...args) => openNew({ Data, setState }, ...args),
		close: (...args) => close({ Data, setState }, ...args),
		setOutput: (...args) => setOutput({ Data, setState }, ...args),
	}
}
