export function body(imports, props, styleDefault, Root = "div") {
	const { BottomNavigation, MenuBarContents, usePageContext } = imports
	const pageContext = usePageContext()
	return (
		<BottomNavigation {...props.DOMAttributes}>
			<MenuBarContents rootPath={pageContext.rootPath} />
		</BottomNavigation>
	)
}
