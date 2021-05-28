export function body(imports, props, styleDefault, Root = null) {
	const { title, keywords, description } = props
	const { Head } = imports

	return (
		<Head {...props.DOMAttributes}>
			<meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
			<meta name="keywords" content={keywords} />
			<meta name="description" content={description} />
			<meta charSet="utf-8" />
			{!props.index && <meta name="robots" content="noindex" />}
			<link rel="icon" href="/favicon.svg" />
			<title>{title}</title>
		</Head>
	)
}
