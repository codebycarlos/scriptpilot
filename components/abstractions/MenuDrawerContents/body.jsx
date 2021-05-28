export function body(imports, props, styleDefault, Root = "div") {
	const { List, MenuListItem } = imports
	
	return (
		<List {...props.DOMAttributes}>
			{props.MenuListItems && props.MenuListItems.map((item) => (
				<MenuListItem
					key={item.path}
					path={item.path}
					selected={item.path === props.rootPath}
					label={item.label && item.label}
					icon={item.icon && item.icon}
				/>
			))}
		</List>
	)
}
