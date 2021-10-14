export function map(obj, fn) {
	return Object.fromEntries(Object.entries(obj).map(([k, v], i) => [k, fn(v, k, i)]))
}
