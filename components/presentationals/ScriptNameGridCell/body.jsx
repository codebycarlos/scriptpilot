export function body(imports, props, styleDefault, Root = "div") {
	const { IconButton, ScriptsActionMenu, MoreVertIcon, useState, Link } = imports
	const [anchorEl, setAnchorEl] = useState(null)

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget)
	}

	const handleClose = () => {
		setAnchorEl(null)
	}

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
			<ScriptsActionMenu
				anchorEl={anchorEl}
				onClose={handleClose}
				value={props.value}
				refresh={props.refresh}
			/>
		</Root>
	)
}
