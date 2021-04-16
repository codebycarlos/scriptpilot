export function body(imports, props, styleDefault, Root = "div") {
	const render = props.render;
	return <>{render && props.children}</>;
}
