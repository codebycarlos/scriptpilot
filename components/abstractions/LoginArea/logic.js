export function logic(imports, props, styleDefault) {
	const { usePageContext, useState, useForm, CustomAxiosAsync, Settings, useWithSnackbar } =
		imports
	const [emailToggled, setEmailToggled] = useState(false)
	const pageProps = usePageContext()
	props.providers = pageProps?.providers
	props.methods = useForm()
	props.emailToggled = emailToggled
	props.setEmailToggled = setEmailToggled
	props.nextAuthCallbackUrl =
		"nextAuthCallbackUrl" in pageProps ? pageProps.nextAuthCallbackUrl : ""
	props.src = "logoPath" in pageProps.Brand ? pageProps.Brand.logoPath : ""
	props.byLine = {
		text: "CodebyCarlos",
		style: { color: "white", fontSize: "0.7rem", margin: "unset", paddingLeft: "50px" },
	}
	props.byLineLink = "https://github.com/codebycarlos/scriptpilot"
	props.onSubmit = useWithSnackbar(
		async (data) => {
			const CoreAsyncSettings = await Settings.CoreAsync()
			const axios = await CustomAxiosAsync()
			const response = await axios.post(`${CoreAsyncSettings.host}/api/auth/signin/email`, {
				...data,
			})
			if (response?.status !== 200) throw Error("Unable to send login link.")
		},
		{
			messages: {
				initial: "Sending email.",
				success: "Done. Please follow the link in the email to log in.",
				error: "Unable to send login link. Please try another method.",
			},
		},
	)

	return props
}
