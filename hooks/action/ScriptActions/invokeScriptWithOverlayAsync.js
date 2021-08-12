import { API, Try } from "./_dependencies"

export async function invokeScriptWithOverlayAsync({ Data }, { Input, InvokeOverlayActions } = {}) {
	if (!Input || Object.keys(Input).length === 0)
		Input = { ...Data?.script?.Configuration, Qualifier: Data?.script?.Configuration?.Version }

	const { ScriptsAPI } = await API.loadScriptsAPIAsync()

	const [output, error] = await Try(() => ScriptsAPI.invokeScriptAsync(Input))

	if (error || output?.$metadata?.httpStatusCode !== 200 || !output?.Payload)
		throw error ?? Error("Unable to invoke script.")

	if (output.FunctionError)
		return InvokeOverlayActions.setOutput({
			outputText: output.Payload,
			outputType: "error",
		})

	InvokeOverlayActions.setOutput({
		outputText: output.Payload,
		outputType: "success",
	})
}
