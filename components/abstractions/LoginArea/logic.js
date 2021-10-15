export function logic(imports, props, styleDefault) {
	const { usePageContext } = imports
	const pageProps = usePageContext()

	props.nextAuthCallbackUrl =
		"nextAuthCallbackUrl" in pageProps ? pageProps.nextAuthCallbackUrl : ""
	props.src = "logoPath" in pageProps.Brand ? pageProps.Brand.logoPath : ""
	props.byLine = {
		text: "CodebyCarlos",
		style: { color: "white", fontSize: "0.7rem", margin: "unset", paddingLeft: "50px" },
	}

	return props
}
