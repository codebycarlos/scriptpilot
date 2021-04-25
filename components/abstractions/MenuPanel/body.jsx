export function body(imports, props, styleDefault, Root = "div") {
	const { FlexPanel, Logo, Divider, MenuDrawer, MediaQuery, Footer } = imports;
	return (
		<FlexPanel {...props.DOMAttributes} type="vertical">
			<MediaQuery query="(min-height:300px)">
				<Logo
					text={false}
					layout="responsive"
					width={50}
					height={50}
					className={styleDefault.Logo}
				/>
				<Divider className={styleDefault.Divider} />
			</MediaQuery>
			<MenuDrawer className={styleDefault.MenuDrawer} />
			<Footer className={`${styleDefault.Footer}`} />
		</FlexPanel>
	);
}
