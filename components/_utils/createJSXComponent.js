export function createJSXComponent(props, componentJSXDefinition, setDOMAttributes) {
	const { imports, styleDefault, logic, body } = componentJSXDefinition;
	if(logic(imports, props)) props = logic(imports, props);
	props = setDOMAttributes(props, styleDefault);
	return body(imports, props, styleDefault);
}
