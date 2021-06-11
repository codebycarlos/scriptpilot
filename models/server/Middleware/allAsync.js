import { addSessionIfNotProvidedAsync } from './addSessionIfNotProvidedAsync'
import { requestParsingAsync } from './requestParsingAsync'

export async function allAsync(req, res) {
  ({ req, res } = await addSessionIfNotProvidedAsync(req, res));
  ({ req, res } = await requestParsingAsync(req, res))

  return { req,
    res }
}
