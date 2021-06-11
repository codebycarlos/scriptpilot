import { ArgumentValidator, Middleware } from './_dependencies'
export async function runMiddlewareAsync(req, res) {
  ArgumentValidator.check([
    req,
    res
  ])

  return await Middleware.allAsync(req, res)
}
