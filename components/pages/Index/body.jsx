export function body(imports, props, styleDefault, data, Root = "main") {
	const [session, loading] = imports.useSession();
	const { Link, ButtonDefault } = imports;
	return (
		<Root {...props.DOMAttributes}>
			{!session && !loading && (
				<section>
					Not signed in <br />
					<button onClick={imports.signIn}>Sign In</button>
				</section>
			)}
			{session && (
				<section>
					<ButtonDefault className="primary contained">Testing!</ButtonDefault>
					Signed in as {session.user.email} <br />
					<div>You can now access our super secret pages</div>
					<Link href="/restricted">
						<button>Access</button>
					</Link>
					<button onClick={imports.signOut}>Sign Out</button>
				</section>
			)}
		</Root>
	);
}
