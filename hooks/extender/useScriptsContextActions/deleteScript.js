import { ScriptsAPI } from './_dependencies'

export const deleteScriptAsync = (requestWithSnackbar, ...args) => {

  return requestWithSnackbar(ScriptsAPI.deleteScriptAsync(...args), { initial: 'Deleting script.' })
}
