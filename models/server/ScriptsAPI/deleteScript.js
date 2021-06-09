import { Lambda } from './_dependencies'
export async function deleteScript({ name, version }) {
  try {
    const lambda = await Lambda()

    await lambda.deleteFunction({ FunctionName: name,
      Qualifier: version })

    return { error: null,
      message: null }
  } catch (e) {
    if (e.name === 'ResourceNotFoundException') {
      return { error: e,
        message: 'Script not found.' }
    }

    return { error: e,
      message: 'Request for script deletion failed.' }
  }
}
