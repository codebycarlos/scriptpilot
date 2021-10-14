export function body(imports, props, styleDefault, Root = "div") {
	const { ButtonDefault, ActionsPanel, FlashOnIcon } = imports
	return (
		<ActionsPanel {...props.DOMAttributes}>
			<ButtonDefault type="submit" className="contained primary" title="Invoke">
				<FlashOnIcon />
				<p>Invoke</p>
			</ButtonDefault>
		</ActionsPanel>
	)
}
