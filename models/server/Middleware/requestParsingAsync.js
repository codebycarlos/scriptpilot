export async function requestParsingAsync(req, res) {
	if (req && "headers" in req && "authorization" in req.headers)
		req.headers.authorization = JSON.parse(req.headers.authorization)

	return { req, res }
}
