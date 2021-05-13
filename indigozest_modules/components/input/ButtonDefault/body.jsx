export function body(imports, props, styleDefault, Root = "button") {
	const { MaterialButton } = imports
	return (
		<MaterialButton {...props.DOMAttributes} type={props.type}>
			{props.children}
		</MaterialButton>
	)
}
