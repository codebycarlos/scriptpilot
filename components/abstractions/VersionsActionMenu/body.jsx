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
			<Link
				href={`/scripts/${props.script?.Configuration?.FunctionName}/versions/${props.value}`}
			>
				<MenuItem onClick={props.onClose}>Details</MenuItem>
			</Link>
			<MenuItem onClick={() => props.handleDelete(props.value)}>Delete</MenuItem>
			<MenuItem onClick={() => props.handleInvoke(props.value)}>Invoke</MenuItem>
		</Menu>
	)
}
