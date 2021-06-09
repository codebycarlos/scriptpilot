import { Lambda } from './_dependencies'
export async function getScripts() {
  try {
    const lambda = await Lambda()
    const scripts = await lambda.listAllFunctions()

    return { scripts,
      error: null,
      message: null }
  } catch (e) {
    return { scripts: [],
      error: e,
      message: 'Request for scripts failed.' }
  }
}
