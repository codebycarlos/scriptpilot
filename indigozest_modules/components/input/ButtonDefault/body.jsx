export function body(imports, props, styleDefault, Root = "button") {
	const { MaterialButton } = imports
	return (
		<MaterialButton {...props.DOMAttributes} type={props.type} onClick={props.onClick}>
			{props.children}
		</MaterialButton>
	)
}
