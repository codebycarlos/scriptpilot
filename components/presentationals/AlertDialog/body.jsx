export function body(imports, props, styleDefault, Root = "div") {
	const { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } = imports
	const {title, contentText, actions} = props.dialog
	return (
		<Dialog
			{...props.DOMAttributes}
			open={props.open}
			onClose={props.handleClose}
			aria-labelledby="alert-dialog-title"
			aria-describedby="alert-dialog-description"
		>
			{title && <DialogTitle id="alert-dialog-title">{title}</DialogTitle>}
			{contentText && (
				<DialogContent>
					<DialogContentText id="alert-dialog-description">
						{contentText}
					</DialogContentText>
				</DialogContent>
			)}
			{actions && (
				<DialogActions>
					{actions.map((action) => (
						<Button onClick={action.onClick} color="primary">
							{action.label}
						</Button>
					))}
				</DialogActions>
			)}
		</Dialog>
	)
}
