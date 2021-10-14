export function body(imports, props, styleDefault, Root = "div") {
	const { value } = props
	const { AlertDialogContext } = imports
	return <AlertDialogContext.Provider value={value}>{props.children}</AlertDialogContext.Provider>
}
