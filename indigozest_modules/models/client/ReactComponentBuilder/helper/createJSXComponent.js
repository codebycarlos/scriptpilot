import { setDOMAttributes } from "./setDOMAttributes"
export function createJSXComponent(props, componentJSXDefinition) {
	const { imports, styleDefault, logic, body } = componentJSXDefinition
	const modifiedProps = logic(imports, props, styleDefault)

	if (modifiedProps) props = modifiedProps

	props = setDOMAttributes(props, styleDefault)

	return body(imports, props, styleDefault)
}
