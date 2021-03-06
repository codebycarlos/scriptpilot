export function success(responseObject, { data = '' } = {}, status = 200) {
  const formattedResponse = JSON.stringify({ status: 'success',
    data })

  responseObject.status(status).json(formattedResponse)
}
