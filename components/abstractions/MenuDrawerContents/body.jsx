export function body(imports, props, styleDefault, Root = "div") {
	const { List, MenuListItems, MenuListItem } = imports;
	return (
		<List {...props.DOMAttributes}>
			{MenuListItems.map((item) => (
				<MenuListItem
					key={item.path}
					path={item.path}
					selected={item.path === props.currentPage}
					label={item.label && item.label}
					icon={item.icon && item.icon}
				/>
			))}
		</List>
	);
}
