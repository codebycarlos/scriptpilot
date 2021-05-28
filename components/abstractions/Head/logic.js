export function logic(imports, props) {
	const { usePageContext } = imports
	const pageProps = usePageContext()
	props.title = "title" in pageProps ? pageProps.title : null
	return props
}
