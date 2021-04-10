import { setComponentPropDefaultsAndTypes } from "../_utils/setComponentPropDefaultsAndTypes";
import { createJSXComponent } from "../_utils/createJSXComponent";
import { setDOMAttributes } from "./setDOMAttributes.js";
export function createReactComponentFunction(componentFunctionDefinition) {
	const { imports, propsDefinition, styleDefault, logic, body } = componentFunctionDefinition;
	const componentJSXDefinition = { imports, styleDefault, logic, body };
	// Create component function
	const Component = function (props) {
		return createJSXComponent(props, componentJSXDefinition, setDOMAttributes);
	};
	// Initialise prop defaults and types
	setComponentPropDefaultsAndTypes(Component, propsDefinition);
	// Return component
	return Component;
}
