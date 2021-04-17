export function fail(data = "") {
	return JSON.stringify({ status: "fail", data: data });
}
