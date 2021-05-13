export function body(imports, props, styleDefault, Root = "div") {
	const { PageContext, value } = props
	return <PageContext.Provider value={value}>{props.children}</PageContext.Provider>
}
