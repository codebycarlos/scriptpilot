export function body(imports, props, styleDefault, Root = "div") {
	const { MenuResponsive, Content, Footer, MediaQuery, breakpoint } = imports;
	return (
		<Root {...props.DOMAttributes} style={{ flexDirection: props.flexDirection }}>
			<MenuResponsive />
			<Content style={{ order: props.order }}>
				{props.children}
				<MediaQuery query={`(max-width:${breakpoint.variable_breakpoint_S})`}>
					<Footer className={styleDefault.Footer} />
				</MediaQuery>
			</Content>
		</Root>
	);
}
