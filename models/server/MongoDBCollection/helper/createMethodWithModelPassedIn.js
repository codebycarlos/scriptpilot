export function createMethodWithModelPassedIn(model, method) {
	return (...remainingArguments) => {
		return method(model, ...remainingArguments)
	}
}
