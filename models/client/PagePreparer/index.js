import { getDefaultPropsAsync } from './getDefaultPropsAsync'
import { getRedirect } from './getRedirect'
import { withDefaultPropsAsync } from './withDefaultPropsAsync'

export function PagePreparer(context) {
  return {
    getDefaultPropsAsync: (...args) => getDefaultPropsAsync(context, ...args),
    getRedirect: (...args) => getRedirect(context, ...args),
    withDefaultPropsAsync: (...args) => withDefaultPropsAsync(context, ...args)
  }
}
