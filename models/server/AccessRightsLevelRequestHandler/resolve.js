import { RequestHandler } from './_dependencies'
import { GET } from './GET'

export async function resolve(req, res) {
  ({ req, res } = await RequestHandler.runMiddleware(req, res))

  if (req.method == 'GET') {
    return await GET(req, res)
  }

  return await RequestHandler.methodNotAllowedResponse(res)
}
