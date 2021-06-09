import { deleteScript } from './deleteScript'
import { refreshScripts } from './refreshScripts'
import { refreshScriptsSilent } from './refreshScriptsSilent'

export function useScriptsContextActions() {
  return {
    deleteScript,
    refreshScripts,
    refreshScriptsSilent
  }
}
