export function body(imports, props, styleDefault, Root = "div") {
	const {FlexPanel, LoginArea, BackgroundImage} = imports;
	return (
		<FlexPanel {...props.DOMAttributes} type="vertical">
			<FlexPanel
				type="vertical"
				className={styleDefault.FlexPanel}
			>
				<LoginArea csrfToken={props.csrfToken} />
				<BackgroundImage
					className={styleDefault.BackgroundImage}
					{...props.BackgroundImage}
				/>
			</FlexPanel>
		</FlexPanel>
	);
}
