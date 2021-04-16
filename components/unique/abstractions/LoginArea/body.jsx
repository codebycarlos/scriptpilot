export function body(imports, props, styleDefault, Root = "div") {
	const { ContentGroup, LogoWithByline, ButtonDefault, styles } = imports;
	Root = ContentGroup;
	return (
		<Root {...props.DOMAttributes}>
			<LogoWithByline src={props.src} byline={props.byline} />
			<form method="post" action="/api/auth/signin/zoho" style={{ display: "contents" }}>
				<input name="csrfToken" type="hidden" defaultValue={props.csrfToken} />
				<input
					type="hidden"
					name="callbackUrl"
					value={`${process.env.NEXT_PUBLIC_LOGIN_CALLBACK_URL}`}
				/>
				<ButtonDefault
					className="contained primary"
					style={{
						width: "100%",
					}}
					type="submit"
				>
					Log In
				</ButtonDefault>
			</form>
		</Root>
	);
}
