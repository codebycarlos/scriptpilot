import { LambdaClient } from './_dependencies'
export async function listAllFunctions({ functions = [], Marker, MaxItems = 50 } = {}) {
  const lambdaClient = await LambdaClient()
  const data = await lambdaClient.listFunctions({ Marker,
    MaxItems })

  if ('Functions' in data) {
    functions.push(...data.Functions)
  }

  if (!data.NextMarker || functions.length >= MaxItems) {
    return functions
  }

  listAllFunctions({ functions,
    Marker: data.NextMarker,
    MaxItems: MaxItems - functions.length })
}
