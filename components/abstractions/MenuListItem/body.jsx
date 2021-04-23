export function body(imports, props, styleDefault, Root = "div") {
	const { Link, ListItem, ListItemText, ListItemIcon } = imports;
	return (
		<Link href={props.path} {...props.DOMAttributes}>
			<ListItem
				button
				className={styleDefault.ListItem}
				selected={props.selected}
			>
				{props.icon && <ListItemIcon>{<props.icon />}</ListItemIcon>}
				{props.label && (
					<ListItemText className={styleDefault.ListItemText} primary={props.label} />
				)}
			</ListItem>
		</Link>
	);
}
