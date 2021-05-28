export function body(imports, props, styleDefault, Root = "div") {
	const { MenuBarItem } = imports
	return (
		<>
			{props.MenuListItems && props.MenuListItems.map((item) => (
				<MenuBarItem
					key={item.path}
					value={item.path}
					label={item.label && item.label}
					icon={item.icon && item.icon}
					selected={item.path === props.rootPath}
				/>
			))}
		</>
	)
}
