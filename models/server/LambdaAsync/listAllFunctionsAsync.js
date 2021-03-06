import { LambdaClientAsync } from './_dependencies'
export async function listAllFunctionsAsync({ functions = [], Marker, MaxItems = 50 } = {}) {
  const lambdaClient = await LambdaClientAsync()
  const data = await lambdaClient.listFunctions({ Marker,
    MaxItems })

  if ('Functions' in data) functions.push(...data.Functions)
  
  if (!data.NextMarker || functions.length >= MaxItems) return functions

  return listAllFunctionsAsync({ functions,
    Marker: data.NextMarker,
    MaxItems: MaxItems - functions.length })
}
