export function body(imports, props, styleDefault, Root = "div") {
	const { value } = props
	const { ScriptsContext } = imports
	return <ScriptsContext.Provider value={value}>{props.children}</ScriptsContext.Provider>
}
