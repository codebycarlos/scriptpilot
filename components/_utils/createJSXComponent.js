export function createJSXComponent(props, componentJSXDefinition, setDOMAttributes) {
	const { imports, styleDefault, logic, body } = componentJSXDefinition;
	const data = logic(imports, props);
	props = setDOMAttributes(props, styleDefault);
	return body(imports, props, styleDefault, data);
}
