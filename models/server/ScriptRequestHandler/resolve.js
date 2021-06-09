import { RequestHandler } from './_dependencies'
import { GET } from './GET'
import { DELETE } from './DELETE'
export async function resolve(req, res) {
  ({ req, res } = await RequestHandler.runMiddleware(req, res))

  if (req.method == 'GET') {
    return await RequestHandler.protectRoute(GET, { req,
      res }, 2)
  }
  if (req.method == 'DELETE') {
    return await RequestHandler.protectRoute(DELETE, { req,
      res }, 2)
  }

  return await RequestHandler.methodNotAllowedResponse(res)
}
