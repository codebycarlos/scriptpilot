export function body(imports, props, styleDefault, Root = "div") {
	const { Menu, MenuItem, Link } = imports
	return (
		<Menu
			{...props.DOMAttributes}
			anchorEl={props.anchorEl}
			keepMounted={true}
			open={Boolean(props.anchorEl)}
			onClose={props.onClose}
			PaperProps={{
				style: {
					maxHeight: 48 * 4.5,
					width: "20ch",
				},
				elevation: 1,
			}}
			placement="bottom"
		>
			<Link href={`scripts/${props.value}`} prefetch={false}>
				<MenuItem onClick={props.onClose}>Details</MenuItem>
			</Link>
			<Link href={`scripts/${props.value}?action=edit`} prefetch={false}>
				<MenuItem onClick={props.onClose}>Edit</MenuItem>
			</Link>
			<MenuItem onClick={props.onClose}>Execute</MenuItem>
			<MenuItem onClick={() => {props.onClose(); props.refresh()}}>Duplicate</MenuItem>
			<MenuItem onClick={() => props.handleDelete(props.value)}>Delete</MenuItem>
		</Menu>
	)
}
