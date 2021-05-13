export function logic(imports, props, styleDefault) {
	const { useSession, LogRocket } = imports
	const [Session] = useSession()

	LogRocket.init("0tpjog/scriptpilot")

	if (Session) {
		LogRocket.identify(Session.User.id, {
			name: Session.User.name,
			email: Session.User.email,
		})
	}

	return
}
