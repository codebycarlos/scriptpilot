export function body(imports, props, styleDefault, Root = "div") {
	const { useLogOut } = imports
	const [logOut] = useLogOut()
	return (
		<Root {...props.DOMAttributes}>
			<a>Terms</a>
			<p className={styleDefault.separator}>•</p>
			<a
				className="log-out-link"
				onClick={async () => await logOut()
				}
			>
				Log out
			</a>
		</Root>
	)
}
