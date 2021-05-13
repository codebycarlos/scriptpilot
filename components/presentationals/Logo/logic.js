export function logic(imports, props, styleDefault) {
	if (props.text === false) props["src"] = "/assets/images/logos/favicon.svg"
	return props
}
