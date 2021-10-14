import { LambdaClientAsync } from "./_dependencies"
export async function listAllVersionsByFunctionAsync({
    versions = [],
	FunctionName,
	Marker,
	MaxItems = 50,
} = {}) {
    if (!FunctionName) throw Error("No function name provided.")

	const lambdaClient = await LambdaClientAsync()
	const data = await lambdaClient.listVersionsByFunction({ FunctionName, Marker, MaxItems })

	if ("Versions" in data) versions.push(...data.Versions)

	if (!data.NextMarker || versions.length >= MaxItems) return versions

	return listAllVersionsByFunctionAsync({
		versions,
        FunctionName,
		Marker: data.NextMarker,
		MaxItems: MaxItems - versions.length,
	})
}
