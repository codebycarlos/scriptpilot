export function logic(imports, props, styleDefault) {
	const { useContext, PageContext } = imports
	const pageProps = useContext(PageContext)
	props.src = "logoNoTextPath" in pageProps.Brand ? pageProps.Brand.logoNoTextPath : ""
	return props
}
