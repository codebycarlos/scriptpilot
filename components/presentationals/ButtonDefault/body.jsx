export function body(imports, props, styleDefault, data, Root = "button") {
	Root = imports.MaterialButton;
	return <Root {...props.DOMAttributes}>{props.children}</Root>;
}
