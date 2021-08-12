export function logic(imports, props, styleDefault) {
	const { useMediaQuery, breakpoint, useScriptContext } = imports
	const largeScreen = useMediaQuery(`(max-width:${breakpoint.variable_breakpoint_L})`)
	const {
		Data: { script, error },
	} = useScriptContext()

	const getFormatedRows = (script) => {
		const variables = script?.Configuration?.Environment?.Variables
		const keys = Object.keys(variables)
		const values = Object.values(variables)
		let formatedRows = []

		keys.forEach((key, index) =>
			formatedRows.push({ id: index, key: key, value: values[index] }),
		)
		return formatedRows
	}

	props.DataGrid = {
		density: largeScreen ? "compact" : "standard",
		getRowId: (row) => row.id,
		autoHeight: true,
		disableSelectionOnClick: true,
		columns: [
			{
				field: "key",
				headerName: "Key",
				width: 400,
			},
			{
				field: "value",
				headerName: "Value",
				width: 400,
			},
		],
		rows: getFormatedRows(script),
		error,
		components: {
			ErrorOverlay: () => (
				<p className="error-message">
					<b>Error:</b> {error}
				</p>
			),
		},
	}

	return props
}
