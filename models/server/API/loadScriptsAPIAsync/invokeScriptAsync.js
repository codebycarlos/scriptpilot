import { LambdaAsync, Try } from "./_dependencies"
export async function invokeScriptAsync({
	FunctionName,
	Qualifier,
	InvocationType = "RequestResponse",
	LogType = "Tail",
	Payload,
	ClientContext,
}) {
	const { Lambda } = await LambdaAsync()

	let [response, error] = await Try(() =>
		Lambda.invoke({ FunctionName, Qualifier, InvocationType, LogType, Payload, ClientContext }),
	)

	const decoder = new TextDecoder("ascii")
	response.Payload = decoder.decode(response?.Payload)

	if (error?.name === "ResourceNotFoundException") throw Error("Script not found.")
	if (error) throw Error("Script invocation failed.")

	return response
}
