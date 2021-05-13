export function body(imports, props, styleDefault, Root = "div") {
	const { Drawer, MenuDrawerContents, useRouter } = imports
	const router = useRouter()
	return (
		<Drawer
			{...props.DOMAttributes}
			variant="permanent"
			PaperProps={{ className: styleDefault.Paper }}
		>
			<MenuDrawerContents currentPage={router.pathname} />
		</Drawer>
	)
}
