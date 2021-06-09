import { API, JSend } from './_dependencies'
export async function GET(req, res) {
  const { AuthAPI } = await API.Auth(req.headers.authorization)

  const { accessRightsLevel, error, message } = await AuthAPI.getAccessRightsLevel()

  if (error) {
    return JSend(res).error({ message })
  }

  return JSend(res).success({ data: { accessRightsLevel } })
}
