export function body(imports, props, styleDefault, Root = "div") {
	const { value } = props
	const { InvokeOverlayContext } = imports
	return <InvokeOverlayContext.Provider value={value}>{props.children}</InvokeOverlayContext.Provider>
}
