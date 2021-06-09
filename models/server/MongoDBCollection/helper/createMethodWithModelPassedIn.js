export function createMethodWithModelPassedIn(model, method) {
  return (...remainingArguments) => method(model, ...remainingArguments)
}
