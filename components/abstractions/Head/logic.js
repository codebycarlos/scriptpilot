export function logic(imports, props) {
	const pageProps = useContext(PageContext)
	props.title = companyName in pageProps ? pageProps.companyName : null
	return props
}
