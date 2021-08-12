export function body(imports, props, styleDefault, Root = "div") {
	const { ButtonDefault, ActionsPanel, EditIcon, CloseIcon, Link } = imports
	return (
		<ActionsPanel {...props.DOMAttributes}>
			<Link href={`/scripts/${props.script?.Configuration.FunctionName}`}>
				<ButtonDefault className="contained secondary" title="Cancel">
					<CloseIcon />
					<p>Cancel</p>
				</ButtonDefault>
			</Link>
			<ButtonDefault type="submit" className="contained primary" title="Edit">
				<EditIcon />
				<p>Confirm</p>
			</ButtonDefault>
		</ActionsPanel>
	)
}
