export function logic(imports, props, styleDefault) {
	const { useMediaQuery, breakpoint, useVersionsContext, VersionNumberGridCell } = imports
	const largeScreen = useMediaQuery(`(max-width:${breakpoint.variable_breakpoint_L})`)
	const {
		Data: { versions, error },
	} = useVersionsContext()

	props.DataGrid = {
		density: largeScreen ? "compact" : "standard",
		getRowId: (row) => row.FunctionArn,
		autoHeight: true,
		disableSelectionOnClick: true,
		columns: [
			{
				field: "Version",
				headerName: "Version",
				width: 130,
				renderCell: ({ value }) => <VersionNumberGridCell value={value} />,
			},
			{
				field: "Description",
				headerName: "Description",
				width: 700,
			},
			{
				field: "LastModified",
				headerName: "Last Modified",
				width: 250,
				type: "date",
				valueFormatter: ({ value }) => new Date(value).toUTCString(),
			},
		],
		rows: versions,
		error,
		sortModel: [
			{
				field: "LastModified",
				sort: "desc",
			},
		],
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
