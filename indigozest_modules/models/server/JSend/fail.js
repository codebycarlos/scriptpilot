export function fail(responseObject, { data = '' } = {}, status = 400) {
  const formattedResponse = JSON.stringify({ status: 'fail',
    data })

  responseObject.status(status).json(formattedResponse)
}
