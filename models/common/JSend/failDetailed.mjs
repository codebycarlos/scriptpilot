export function failDetailed(message = "", code = "") {
	return JSON.stringify({ status: "fail", data: { message: message, code: code } });
}
