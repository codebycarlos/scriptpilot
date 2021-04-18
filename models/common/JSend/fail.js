export function fail({ data = "", status = 400 } = {}, responseObject) {
	const formattedResponse = JSON.stringify({ status: "fail", data: data });
	responseObject.status(status).json(formattedResponse);
}
