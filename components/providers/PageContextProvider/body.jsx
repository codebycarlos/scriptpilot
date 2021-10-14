export function body(imports, props, styleDefault, Root = "div") {
	const { value } = props
	const { PageContext } = imports
	return <PageContext.Provider value={value}>{props.children}</PageContext.Provider>
}
