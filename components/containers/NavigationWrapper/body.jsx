export function body(imports, props, styleDefault, Root = "div") {
	const { MenuResponsive, Content, Footer, NotLoggedInAlertDialog, MediaQuery, breakpoint } =
		imports
	return (
		<Root {...props.DOMAttributes} style={{ flexDirection: props.flexDirection }}>
			<NotLoggedInAlertDialog />
			<MenuResponsive />
			<Content style={{ order: props.order }}>
				{props.children}
				<MediaQuery query={`(max-width:${breakpoint.variable_breakpoint_S}), (hover:none)`}>
					<Footer className={styleDefault.Footer} />
				</MediaQuery>
			</Content>
		</Root>
	)
}
