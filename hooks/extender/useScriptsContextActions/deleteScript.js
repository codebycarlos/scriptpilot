import { ScriptsAPI } from './_dependencies'

export const deleteScript = (requestWithSnackbar, ...args) => {

  return requestWithSnackbar(ScriptsAPI.deleteScript(...args), { initial: 'Deleting script.' })
}
