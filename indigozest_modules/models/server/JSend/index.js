import { ArgumentValidator } from './_dependencies'
import { success } from './success'
import { fail } from './fail'
import { failDetailed } from './failDetailed'
import { error } from './error'

export function JSend(responseObject) {
  ArgumentValidator.check([...arguments])

  return {
    success: (responseDefinition, status) => success(responseObject, responseDefinition, status),
    fail: (responseDefinition, status) => fail(responseObject, responseDefinition, status),
    failDetailed: (responseDefinition, status) => failDetailed(responseObject, responseDefinition, status),
    error: (responseDefinition, status) => error(responseObject, responseDefinition, status)
  }
}
