export function body(imports, props, styleDefault, Root = "div") {
	const { Drawer, MenuDrawerContents, usePageContext } = imports
	const pageContext = usePageContext()
	return (
		<Drawer
			{...props.DOMAttributes}
			variant="permanent"
			PaperProps={{ className: styleDefault.Paper }}
		>
			<MenuDrawerContents rootPath={pageContext.rootPath} />
		</Drawer>
	)
}
