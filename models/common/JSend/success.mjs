export function success(data = "") {
	return JSON.stringify({ status: "success", data: data });
}
