export function body(imports, props, styleDefault, Root = "div") {
	const { ContentGroup, LogoWithByline, ButtonDefault } = imports
	return (
		<ContentGroup {...props.DOMAttributes}>
			<LogoWithByline src={props.src} byLine={props.byLine} />
			<form method="post" action="/api/auth/signin/linkedin" style={{ display: "contents" }}>
				<input name="csrfToken" type="hidden" defaultValue={props.csrfToken} />
				<input
					type="hidden"
					name="callbackUrl"
					value={`${props.nextAuthCallbackUrl}/linkedin`}
				/>
				<ButtonDefault
					className={`${styleDefault.ButtonDefault} contained primary login`}
					type="submit"
				>
					Log In with LinkedIn
				</ButtonDefault>
			</form>
			<form method="post" action="/api/auth/signin/email" style={{ display: "contents" }}>
				<input name="csrfToken" type="hidden" defaultValue={props.csrfToken} />
				<input
					type="hidden"
					name="callbackUrl"
					value={`${props.nextAuthCallbackUrl}/email`}
				/>
				<ButtonDefault
					className={`${styleDefault.ButtonDefault} contained primary login`}
					type="submit"
				>
					Log In with Email
				</ButtonDefault>
			</form>
		</ContentGroup>
	)
}
