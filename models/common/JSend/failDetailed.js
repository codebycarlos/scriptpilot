export function failDetailed({ message = "", code = "", status = 400 } = {}, responseObject) {
	const formattedResponse = JSON.stringify({ status: "fail", data: { message: message, code: code } });
	responseObject.status(status).json(formattedResponse);
}
