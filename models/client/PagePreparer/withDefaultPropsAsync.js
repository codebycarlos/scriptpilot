import { Log } from './_dependencies'
import { getDefaultPropsAsync } from './getDefaultPropsAsync'

export async function withDefaultPropsAsync(context, props) {
  let defaultProps = {}

  try {
    defaultProps = await getDefaultPropsAsync(context)
  } catch (e) {
    Log.error(`Unable to load default props. ${e}`)
  }

  return { props: { ...defaultProps,
    ...props } }
}
