import { ArgumentValidator, JSend } from './_dependencies'

export function tryGetSession({ req, res }) {
  ArgumentValidator.check([
    ...arguments,
    req,
    res
  ])

  try {
    return req.headers.authorization
  } catch (e) {
    JSend(res).error(
      {
        message: 'Unable to retrieve session. You need to be signed in.'
      },
      401
    )

    return null
  }
}
