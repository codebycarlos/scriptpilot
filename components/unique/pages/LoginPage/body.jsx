export function body(imports, props, styleDefault, Root = "div") {
	const { MediaQuery, BackgroundImage, Text, FlexPanel, LoginArea, breakpoints } = imports;
	return (
		<Root {...props.DOMAttributes}>
			<MediaQuery query={`(min-width:${breakpoints.var_breakpoints_medium}`}>
				<Text
					type="h3"
					className="white horizontal-center"
					style={{ textShadow: "0px 0px 4px rgba(0, 0, 0, 0.7)" }}
				>
					{props.welcomeText}
				</Text>
			</MediaQuery>
			<FlexPanel className="expand-width-on-small-100" type="vertical" style={{ zIndex: 0 }}>
				<FlexPanel
					className="padding-global-medium-sides-only"
					type="vertical"
					style={{ position: "relative", height: "100%", justifyContent: "center" }}
				>
					<LoginArea csrfToken={props.csrfToken} />
					<BackgroundImage
						quality={1}
						style={{ top: 0, right: 0, overflow: "hidden" }}
						className="frosted-glass-style-helper"
						{...props.BackgroundImage}
					/>
				</FlexPanel>
			</FlexPanel>
			<BackgroundImage {...props.BackgroundImage} />
		</Root>
	);
}
