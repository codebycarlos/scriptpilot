export function body(imports, props, styleDefault, Root = "div") {
	return (
	{
		props.render && <Root {...props.DOMAttributes}>{props.children}</Root>;
	}
	);
}
