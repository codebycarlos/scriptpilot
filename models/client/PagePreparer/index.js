import { getDefaultProps } from "./getDefaultProps"
import { getRedirect } from "./getRedirect"
import { withDefaultProps } from "./withDefaultProps"

export function PagePreparer(context) {
	return {
		getDefaultProps: (...args) => getDefaultProps(context, ...args),
		getRedirect: (...args) => getRedirect(context, ...args),
		withDefaultProps: (...args) => withDefaultProps(context, ...args),
	}
}
