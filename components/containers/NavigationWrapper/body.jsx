export function body(imports, props, styleDefault, Root = "div") {
	const { MenuResponsive, Content, Footer, MediaQuery, breakpoints } = imports;
	return (
		<Root {...props.DOMAttributes}>
			<MenuResponsive />
			<Content>
				{props.children}
				<MediaQuery query={`(max-width:${breakpoints.var_breakpoints_small})`}>
					<Footer className={styleDefault.Footer} />
				</MediaQuery>
			</Content>
		</Root>
	);
}
