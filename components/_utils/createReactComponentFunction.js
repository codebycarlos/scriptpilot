import { setComponentPropDefaultsAndTypes } from "../_utils/setComponentPropDefaultsAndTypes";
import { createJSXComponent } from "../_utils/createJSXComponent";
export function createReactComponentFunction(componentFunctionDefinition) {
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
	const Component = function (props) {
		return createJSXComponent(
			{ ...props, className: [`react-${name}`, props["className"]].join(" ") },
			componentJSXDefinition
		);
	};
	// Initialise prop defaults and types
	setComponentPropDefaultsAndTypes(Component, propsDefinition);
	// Return component
	return Component;
}
