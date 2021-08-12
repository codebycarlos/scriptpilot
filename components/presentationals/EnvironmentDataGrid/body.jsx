export function body(imports, props, styleDefault, Root = "div") {
	const { DataGrid } = imports
	return <DataGrid {...props.DOMAttributes} DataGrid={props.DataGrid} />
}
