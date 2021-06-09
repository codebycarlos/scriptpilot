import { RequestModifier } from "./_dependencies"

export function request({ requestState }, requestFunction) {
	const { blockBasedOnState } = RequestModifier

	return blockBasedOnState({ requestFunction, requestState })
}

