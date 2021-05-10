export function body(imports, props, styleDefault, Root = "div") {
	const { IconButton, Menu, MenuItem, MoreVertIcon, useState, Link } = imports;
	const [anchorEl, setAnchorEl] = useState(null);
	const itemHeight = 48;
	const open = Boolean(anchorEl);

	const handleClick = (event) => {
		console.log(event.currentTarget);
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<Root {...props.DOMAttributes}>
			<Link href={`/scripts/${props.value}`} prefetch={false}>
				{props.value}
			</Link>
			<IconButton
				onClick={handleClick}
				className={`${styleDefault.IconButton} MuiButtonBase-root MuiIconButton-root MuiDataGrid-menuIconButton MuiIconButton-sizeSmall`}
			>
				<MoreVertIcon className={"MuiSvgIcon-fontSizeSmall"} />
			</IconButton>
			<Menu
				id="long-menu"
				anchorEl={anchorEl}
				keepMounted
				open={open}
				onClose={handleClose}
				PaperProps={{
					style: {
						maxHeight: itemHeight * 4.5,
						width: "20ch",
					},
					elevation: 1,
				}}
				placement="bottom"
			>
				<MenuItem onClick={handleClose}>Details</MenuItem>
				<MenuItem onClick={handleClose}>Edit</MenuItem>
				<MenuItem onClick={handleClose}>Execute</MenuItem>
				<MenuItem onClick={handleClose}>Duplicate</MenuItem>
				<MenuItem onClick={handleClose}>Delete</MenuItem>
			</Menu>
		</Root>
	);
}
