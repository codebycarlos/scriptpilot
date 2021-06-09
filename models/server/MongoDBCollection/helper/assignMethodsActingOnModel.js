import { createMethodWithModelPassedIn } from './createMethodWithModelPassedIn'
export function assignMethodsActingOnModel(model, methods) {
  return Object.assign(
    model,
    ...methods.map((method) => ({
      [method.name]: createMethodWithModelPassedIn(model, method)
    }))
  )
}
