import { API, JSend } from './_dependencies'
export async function GET(req, res) {
  const { ZohoAPI } = await API.Zoho()

  const { accessTokenCode, error, message } = await ZohoAPI.getAccesstokenCode(req.query)

  if (error) {
    return JSend(res).error({ message })
  }

  return JSend(res).success({ data: { token: accessTokenCode } })
}
