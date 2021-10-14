export function body(imports, props, styleDefault, Root = "div") {
	const { Link, ScriptsDataGrid, ButtonDefault, AddIcon, ActionsPanel, RefreshIcon } = imports
	return (
		<Root {...props.DOMAttributes}>
			<ScriptsDataGrid />
			<ActionsPanel>
				<ButtonDefault
					onClick={props.handleRefresh}
					className="contained secondary"
					title="Refresh"
				>
					<RefreshIcon />
					<p>Refresh</p>
				</ButtonDefault>
				<Link href={"scripts/new"}>
					<ButtonDefault className="contained primary" title="New Script">
						<AddIcon />
						<p>New Script</p>
					</ButtonDefault>
				</Link>
			</ActionsPanel>
		</Root>
	)
}
