export function body(imports, props, styleDefault, Root = "div") {
	const { ContentGroup, LogoWithByline, ButtonDefault, styles } = imports;
	Root = ContentGroup;
	return (
		<Root {...props.DOMAttributes}>
			<LogoWithByline src={props.src} byline={props.byline} />
			<form
				method="post"
				action="/api/auth/signin/zoho"
				style={{ display: "contents" }}
			>
				<input name="csrfToken" type="hidden" defaultValue={props.csrfToken} />
				<ButtonDefault
					style={{
						margin: styles["var_margins_local-margins-small"],
						color: styles["var_colors_palette-white"],
						width: "100%",
						backgroundColor: styles["var_colors_palette-primary"],
					}}
					type="submit"
				>
					Log In
				</ButtonDefault>
			</form>
		</Root>
	);
}
