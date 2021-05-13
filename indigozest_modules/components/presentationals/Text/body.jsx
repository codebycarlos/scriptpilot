export function body(imports, props, styleDefault, Root = "div") {
	let ChildRoot = props.ChildRoot
	return (
		<Root {...props.DOMAttributes}>
			<ChildRoot>{props.children}</ChildRoot>
		</Root>
	)
}
