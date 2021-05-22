export function logic(imports, props) {
	const { useContext, PageContext } = imports
	const pageProps = useContext(PageContext)
	props.title = "title" in pageProps ? pageProps.title : null
	return props
}
