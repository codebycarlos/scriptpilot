export function body(imports, props, styleDefault, Root = "div") {
	const { Link, BottomNavigationAction } = imports;
	return (
		<Link {...props.DOMAttributes} href={props.value}>
			<BottomNavigationAction
				showLabel
				value={props.value}
				label={props.label && props.label}
				icon={props.icon && <props.icon />}
				selected={props.selected}
			/>
		</Link>
	);
}
