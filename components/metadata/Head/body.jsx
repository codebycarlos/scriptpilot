export function body(imports, props, styleDefault, data, Root = null) {
	const { title, keywords, description } = props;
	Root = imports.Head;
	return (
		<Root {...props.DOMAttributes}>
			<meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
			<meta name="keywords" content={keywords} />
			<meta name="description" content={description} />
			<meta charSet="utf-8" />
			<link rel="icon" href="/favicon.ico" />
			<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
			<title>{title}</title>
		</Root>
	);
}
