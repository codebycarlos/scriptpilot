import { consola } from "./_dependencies"
import { getDefaultProps } from "./getDefaultProps"
export async function withDefaultProps(context, props) {
	let defaultProps = {}
	
	try {
		defaultProps = await getDefaultProps(context)
	} catch (e) {
		consola.error(`Unable to load default props. ${e}`)
	}

	return { props: { ...defaultProps, ...props } }
}
