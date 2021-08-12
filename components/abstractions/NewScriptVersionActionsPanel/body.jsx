export function body(imports, props, styleDefault, Root = "div") {
	const { ButtonDefault, ActionsPanel, AddIcon, CloseIcon, Link } = imports
	return (
		<ActionsPanel {...props.DOMAttributes}>
			<Link href="/scripts">
				<ButtonDefault className="contained secondary" title="Cancel">
					<CloseIcon />
					<p>Cancel</p>
				</ButtonDefault>
			</Link>
			<ButtonDefault type="submit" className="contained primary" title="Create">
				<AddIcon />
				<p>Publish</p>
			</ButtonDefault>
		</ActionsPanel>
	)
}
