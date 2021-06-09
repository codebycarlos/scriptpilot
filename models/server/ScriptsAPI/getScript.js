import { Lambda } from './_dependencies'
export async function getScript({ name }) {
  try {
    const lambda = await Lambda()
    const script = await lambda.getFunction({ FunctionName: name })

    return { script,
      error: null,
      message: null }
  } catch (e) {
    if (e.name === 'ResourceNotFoundException') {
      return { script: null,
        error: e,
        message: 'Script not found.' }
    }

    return { script: {},
      error: e,
      message: 'Request for script failed.' }
  }
}
