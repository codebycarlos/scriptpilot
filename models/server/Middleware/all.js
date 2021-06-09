import { addSessionIfNotProvided } from './addSessionIfNotProvided'
import { requestParsing } from './requestParsing'
export async function all(req, res) {
  ({ req, res } = await addSessionIfNotProvided(req, res));
  ({ req, res } = await requestParsing(req, res))

  return { req,
    res }
}
