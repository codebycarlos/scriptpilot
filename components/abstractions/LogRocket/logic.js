export function logic(imports, props, styleDefault) {
	const { useSession, LogRocket } = imports;
	const [session, loading] = useSession();

	LogRocket.init("0tpjog/scriptpilot");

	if (session) {
		LogRocket.identify(session.user.id, {
			name: session.user.name,
			email: session.user.email,
		});
	}

	return;
}
