export function body(imports, props, styleDefault, Root = "div") {
	const { value } = props
	const { ScriptContext } = imports
	return <ScriptContext.Provider value={value}>{props.children}</ScriptContext.Provider>
}
