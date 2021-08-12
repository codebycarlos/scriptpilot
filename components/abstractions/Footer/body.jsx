export function body(imports, props, styleDefault, Root = "div") {
	const { useLogOut, Link } = imports
	const { logOutAsync } = useLogOut()
	return (
		<Root {...props.DOMAttributes}>
			<Link href={`/terms`}>
				<a>Terms</a>
			</Link>
			<p className={styleDefault.separator}>•</p>
			<a className="log-out-link" onClick={async () => await logOutAsync()}>
				Log out
			</a>
		</Root>
	)
}
