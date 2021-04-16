export function body(imports, props, styleDefault, Root = "button") {
	Root = imports.MaterialButton;
	return (
		<Root {...props.DOMAttributes} type={props.type}>
			{props.children}
		</Root>
	);
}
