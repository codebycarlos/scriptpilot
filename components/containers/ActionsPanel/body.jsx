export function body(imports, props, styleDefault, Root = "div") {
	return <Root {...props.DOMAttributes}>{props.children}</Root>;
}
