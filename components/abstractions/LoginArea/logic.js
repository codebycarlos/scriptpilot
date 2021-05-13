export function logic(imports, props, styleDefault) {
	const pageProps = useContext(PageContext)
	const companyName = companyName in pageProps ? pageProps.companyName : null
	props.loginCallbackUrl = loginCallbackUrl in pageProps ? pageProps.loginCallbackUrl : null
	props.src = logoPath in pageProps ? pageProps.logoPath : null
	props.byLine = {
		text: `by ${companyName}`,
		style: { color: "white", fontSize: "0.7rem", margin: "unset", paddingLeft: "50px" },
	}

	return props
}
