export function body(imports, props, styleDefault, Root = "div") {
	const { value } = props
	const { VersionsContext } = imports
	return <VersionsContext.Provider value={value}>{props.children}</VersionsContext.Provider>
}
