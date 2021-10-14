import { Log, Try } from "./_dependencies"
import { getDefaultPropsAsync } from "./getDefaultPropsAsync"

export async function withDefaultPropsAsync(context, props) {
	const [defaultProps, errorWithDefaultProps] = await Try(() => getDefaultPropsAsync(context))

	if (errorWithDefaultProps) Log.error(`Unable to load default props. ${errorWithDefaultProps}`)

	return { props: { ...(defaultProps ?? {}), ...props } }
}
