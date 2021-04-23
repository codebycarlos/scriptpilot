export function body(imports, props, styleDefault, Root = "div") {
	const { BottomNavigation, MenuBarContents } = imports;
	return (
		<BottomNavigation {...props.DOMAttributes}>
			<MenuBarContents />
		</BottomNavigation>
	);
}
