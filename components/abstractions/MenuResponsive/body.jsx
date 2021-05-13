export function body(imports, props, styleDefault, Root = "nav") {
	return <Root {...props.DOMAttributes}>{props.MenuToDisplay && <props.MenuToDisplay />}</Root>
}
