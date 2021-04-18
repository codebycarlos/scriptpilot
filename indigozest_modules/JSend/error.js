export function error({ message = "", code = "", data = "", status = 500 } = {}, responseObject) {
	const formattedResponse = JSON.stringify({
		status: "error",
		message: message,
		code: code,
		data: data,
	});
	responseObject.status(status).json(formattedResponse);
}
