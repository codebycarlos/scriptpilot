export function logic(imports, props, styleDefault) {
	const { useState, useEffect, getSession, useAlertDialogContext, consola, useRouter } = imports
	const router = useRouter()
	const { setDialog, closeDialog } = useAlertDialogContext()
	const [checkRequested, setCheckRequested] = useState(false)
	const checkRate = 2 * 60 * 1000 // Minutes Seconds Milliseconds

	async function checkLoggedIn() {
		try {
			setCheckRequested(true)
			const session = await getSession()
			if (session) return
			const title = "Session expired."
			const contentText = "You have been logged out due to inactivity."
			const actions = [
				{
					label: "Log In",
					onClick: () => {
						router.push("/login")
						closeDialog()
					},
				},
			]
			setDialog({ title, contentText, actions })
		} catch (e) {
			consola.error(e)
		}
	}

	useEffect(() => {
		checkLoggedIn()
		const interval = setInterval(() => {
			if (!checkRequested) {
				checkLoggedIn()
			}
		}, checkRate)
		return () => clearInterval(interval)
	}, [])

	return
}
