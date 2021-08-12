export function setOutput({ Data, setState }, { outputText, outputType }) {
	setState((Data) => ({ ...Data, outputText, outputType }))
}
