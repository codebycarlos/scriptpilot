export function body(imports, props, styleDefault, Root = "div") {
	const { ScriptsContext, value } = props
	return <ScriptsContext.Provider value={value}>{props.children}</ScriptsContext.Provider>
}
