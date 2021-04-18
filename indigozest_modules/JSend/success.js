export function success({ data = "", status = 200 } = {}, responseObject) {
	const formattedResponse = JSON.stringify({ status: "success", data: data });
	responseObject.status(status).json(formattedResponse);
}
