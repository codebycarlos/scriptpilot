import { ClientSessionHandler } from './_dependencies'
import { getScripts } from './getScripts'
import { deleteScript } from './deleteScript'

export async function ScriptsAPI(context) {
  const session = context
    ? await ClientSessionHandler.getSession(context)
    : null

  return {
    ScriptsAPI: {
      getScripts: (...args) => getScripts(session, ...args),
      deleteScript: (...args) => deleteScript(session, ...args)
    }
  }
}
