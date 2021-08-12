export function isEmpty(object) {
	if (object == undefined || object === "") return true

	for (const i in object) return false

	if (typeof object === "number") return false

	return true
}
