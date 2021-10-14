export function error(responseObject, { message = '', code = '', data = '' } = {}, status = 400) {
  const formattedResponse = JSON.stringify({
    status: 'error',
    message,
    code,
    data
  })

  responseObject.status(status).json(formattedResponse)
}
