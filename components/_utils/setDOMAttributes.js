export function setDOMAttributes(props, styleDefault) {
	if (!props) return props;

	const acceptedDOMAttributes = [
		"accessKey",
		"contentEditable",
		"dir",
		"draggable",
		"hidden",
		"id",
		"lang",
		"spellCheck",
		"style",
		"tabIndex",
		"title",
		"translate",
	];
	let propsNames = Object.getOwnPropertyNames(props);
	let propsNum = propsNames.length;
	let newProps = { ...props };
	newProps["DOMAttributes"] = {};

	// Class
	if (props.className) newProps["DOMAttributes"]["className"] = props.className;
	for (let className in styleDefault) {
		newProps["DOMAttributes"]["className"] = [
			newProps["DOMAttributes"]["className"],
			styleDefault[className],
		].join(" ");
	}

	// Others
	while (propsNum--) {
		if (acceptedDOMAttributes.includes(propsNames[propsNum]))
			newProps["DOMAttributes"][propsNames[propsNum]] = props[propsNames[propsNum]];
	}
	return newProps;
}
