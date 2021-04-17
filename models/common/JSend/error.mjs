export function error(message = "", code = "", data = "") {
	return JSON.stringify({
		status: "error",
		message: message,
		code: code,
		data: data,
	});
}
