import { API, JSend } from './_dependencies'
export async function GET(req, res) {
  const { ScriptsAPI } = await API.Scripts()

  const { scripts, error, message } = await ScriptsAPI.getScripts()

  if (error) {
    return JSend(res).error({ message })
  }

  return JSend(res).success({ data: { scripts } })
}
