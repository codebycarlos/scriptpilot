import { ArgumentValidator, Middleware } from './_dependencies'
export async function runMiddleware(req, res) {
  ArgumentValidator.check([
    req,
    res
  ])

  return await Middleware.all(req, res)
}
