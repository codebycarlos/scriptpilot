export function filterObjectByChildObjectParameter(object, allowedProperty) {
	// Abort if invalid object
	if (object === null || object === {} || typeof object !== "object") return object
	// Store new object
	const newObject = {}
	Object.keys(object).forEach((key) => {
		if (!object[key].hasOwnProperty(allowedProperty)) return
		newObject[key] = object[key][allowedProperty]
	})
	// Return new object
	return newObject
}
