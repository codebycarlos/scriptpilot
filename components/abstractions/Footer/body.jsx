export function body(imports, props, styleDefault, Root = "div") {
	const { signOut } = imports;
	return (
		<Root {...props.DOMAttributes}>
			<a>Terms</a>
			<p>•</p>
			<a className="signOutLink" onClick={() => signOut()}>
				Log out
			</a>
		</Root>
	);
}
