export function body(imports, props, styleDefault, Root = "div") {
	const {
		ScriptsContextProvider,
		ScriptsDataGrid,
		ButtonDefault,
		AddIcon,
		ActionsPanel,
	} = imports
	return (
		<Root {...props.DOMAttributes}>
			<ScriptsContextProvider>
				<ScriptsDataGrid functions={props.functions} />
			</ScriptsContextProvider>
			<ActionsPanel>
				<ButtonDefault className="contained primary">
					<AddIcon />
					New Script
				</ButtonDefault>
			</ActionsPanel>
		</Root>
	)
}
