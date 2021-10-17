export function logic(imports, props, styleDefault) {
	const { useSession, LogRocket } = imports
	const [session] = useSession()

	const extensionsSettings = Settings.Extensions()

	LogRocket.init(extensionsSettings.logRocketId)

	if (session)
		LogRocket.identify(session.user.id, {
			name: session.user.name,
			email: session.user.email,
		})
}
