export function body(imports, props, styleDefault, Root = "div") {
	const { ContentGroup, LogoWithByline, ButtonDefault, styles } = imports
	return (
		<ContentGroup {...props.DOMAttributes}>
			<LogoWithByline src={props.src} byLine={props.byLine} />
			<form method="post" action="/api/auth/signin/zoho" style={{ display: "contents" }}>
				<input name="csrfToken" type="hidden" defaultValue={props.csrfToken} />
				<input
					type="hidden"
					name="callbackUrl"
					value={props.loginCallbackUrl}
				/>
				<ButtonDefault
					className={`${styleDefault.ButtonDefault} contained primary`}
					type="submit"
				>
					Log In
				</ButtonDefault>
			</form>
		</ContentGroup>
	)
}
