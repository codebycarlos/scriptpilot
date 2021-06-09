export function body(imports, props, styleDefault, Root = "div") {
	const {
		ScriptsDataGrid,
		ButtonDefault,
		AddIcon,
		ActionsPanel,
		RefreshIcon,
	} = imports
	return (
		<Root {...props.DOMAttributes}>
			<ScriptsDataGrid functions={props.functions} />
			<ActionsPanel>
				<ButtonDefault
					onClick={props.handleRefresh}
					className="contained secondary icon-only"
				>
					<RefreshIcon />
				</ButtonDefault>
				<ButtonDefault className="contained primary with-icon">
					<AddIcon />
					New Script
				</ButtonDefault>
			</ActionsPanel>
		</Root>
	)
}
