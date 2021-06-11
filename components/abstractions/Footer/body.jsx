export function body(imports, props, styleDefault, Root = "div") {
	const { useLogOut } = imports
	const [logOutAsync] = useLogOut()
	return (
		<Root {...props.DOMAttributes}>
			<a>Terms</a>
			<p className={styleDefault.separator}>•</p>
			<a className="log-out-link" onClick={async () => await logOutAsync()}>
				Log out
			</a>
		</Root>
	)
}
