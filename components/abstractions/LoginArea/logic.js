export function logic(imports, props, styleDefault) {
	const { usePageContext } = imports
	const pageProps = usePageContext()

	const byLineText = "companyName" in pageProps.Brand ? `by ${pageProps.Brand.companyName}` : ""
	props.loginCallbackUrl = "loginCallbackUrl" in pageProps ? pageProps.loginCallbackUrl : ""
	props.src = "logoPath" in pageProps.Brand ? pageProps.Brand.logoPath : ""
	props.byLine = {
		text: byLineText,
		style: { color: "white", fontSize: "0.7rem", margin: "unset", paddingLeft: "50px" },
	}

	return props
}
