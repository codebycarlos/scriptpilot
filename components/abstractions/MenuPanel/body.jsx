export function body(imports, props, styleDefault, Root = "div") {
	const { FlexPanel, Logo, MenuDrawer, MediaQuery, Footer } = imports
	return (
		<FlexPanel {...props.DOMAttributes} type="vertical">
			<MediaQuery query="(min-height:350px)">
				<Logo
					text={false}
					layout="responsive"
					width={50}
					height={50}
					className={styleDefault.Logo}
				/>
			</MediaQuery>
			<MenuDrawer className={styleDefault.MenuDrawer} />
			<Footer className={`${styleDefault.Footer}`} />
		</FlexPanel>
	)
}
