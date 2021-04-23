import { setComponentPropDefaultsAndTypes } from "./helper/setComponentPropDefaultsAndTypes";
import { createJSXComponent } from "./helper/createJSXComponent";
export function build(componentFunctionDefinition) {
	const {
		imports,
		propsDefinition,
		styleDefault,
		logic,
		body,
		name,
	} = componentFunctionDefinition;
	const componentJSXDefinition = { imports, styleDefault, logic, body };

	// Create component function
	function Component (props) {
		return createJSXComponent (
			{ ...props, className: [`react-${name}`, props["className"]].join(" ") },
			componentJSXDefinition
		);
	};

	// Initialise prop defaults and types
	setComponentPropDefaultsAndTypes(Component, propsDefinition);
	
	// Return component
	return Component;
}
