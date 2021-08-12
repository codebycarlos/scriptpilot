export function logic(imports, props, styleDefault) {
	const { useState, useMediaQuery, breakpoint, useScriptsContext, ScriptNameGridCell } = imports
	const largeScreen = useMediaQuery(`(max-width:${breakpoint.variable_breakpoint_L})`)
	const {
		Data: { scripts, error },
	} = useScriptsContext()

	props.DataGrid = {
		density: largeScreen ? "compact" : "standard",
		getRowId: (row) => row.FunctionArn,
		autoHeight: true,
		disableSelectionOnClick: true,
		columns: [
			{
				field: "FunctionName",
				headerName: "Script Name",
				width: 500,
				renderCell: ({ value }) => <ScriptNameGridCell value={value} />,
			},
			{
				field: "CodeSize",
				headerName: "Code Size",
				width: 130,
				valueFormatter: ({ value }) => `${value} byte`,
			},
			{
				field: "Runtime",
				headerName: "Runtime",
				width: 150,
				valueFormatter: ({ value }) => value.charAt(0).toUpperCase() + value.slice(1),
			},
			{
				field: "LastModified",
				headerName: "Last Modified",
				width: 250,
				type: "date",
				valueFormatter: ({ value }) => new Date(value).toUTCString(),
			},
		],
		rows: scripts,
		error,
		sortModel: [
			{
				field: "LastModified",
				sort: "desc",
			},
		],
		pageSize: 5,
		rowsPerPageOptions: [5, 10, 25, 50, 100],
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
