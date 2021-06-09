import { API, JSend } from './_dependencies'
export async function DELETE(req, res) {
  const { ScriptsAPI } = await API.Scripts()

  const { error, message } = await ScriptsAPI.deleteScript(req.query)

  if (error) {
    return JSend(res).error({ message })
  }

  return JSend(res).success()
}
