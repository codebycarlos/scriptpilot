export function body(imports, props, styleDefault, Root = "div") {
	const { MenuListItems, MenuBarItem, useRouter } = imports;
	const router = useRouter();
	return (
		<>
			{MenuListItems.map((item) => (
				<MenuBarItem
					key={item.path}
					value={item.path}
					label={item.label && item.label}
					icon={item.icon && item.icon}
					selected={item.path === router.pathname}
				/>
			))}
		</>
	);
}
