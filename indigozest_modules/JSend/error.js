export function error(responseObject, { message = "", code = "", data = "" } = {}, status = 400) {
	const formattedResponse = JSON.stringify({
		status: "error",
		message: message,
		code: code,
		data: data,
	});
	responseObject.status(status).json(formattedResponse);
}
