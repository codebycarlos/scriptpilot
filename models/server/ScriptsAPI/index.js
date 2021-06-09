import { getScript } from './getScript'
import { getScripts } from './getScripts'
import { deleteScript } from './deleteScript'

export async function ScriptsAPI() {
  return {
    ScriptsAPI: {
      getScript,
      getScripts,
      deleteScript
    }
  }
}
