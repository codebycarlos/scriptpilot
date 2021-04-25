export function body(imports, props, styleDefault, Root = "div") {
	const { signOut } = imports;
	return (
		<Root {...props.DOMAttributes}>
			<a>Terms</a>
			<p className={styleDefault.separator}>•</p>
			<a className="log-out-link" onClick={() => signOut()}>
				Log out
			</a>
		</Root>
	);
}
