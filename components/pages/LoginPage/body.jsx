export function body(imports, props, styleDefault, Root = "main") {
	const { LoginPanel, MediaQuery, BackgroundImage, Text, breakpoint } = imports;
	return (
		<Root {...props.DOMAttributes}>
			<MediaQuery query={`(min-width:${breakpoint.variable_breakpoint_medium}`}>
				<Text type="h1" className="big-white-text">
					{props.welcomeText}
				</Text>
			</MediaQuery>
			<LoginPanel csrfToken={props.csrfToken} BackgroundImage={props.BackgroundImage} />
			<BackgroundImage {...props.BackgroundImage} />
		</Root>
	);
}
