export function failDetailed(responseObject, { message = "" } = {}, status = 400) {
	const formattedResponse = JSON.stringify({
		status: "fail",
		data: { message: message, code: status },
	})
	responseObject.status(status).json(formattedResponse)
}
