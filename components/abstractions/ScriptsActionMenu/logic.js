export function logic(imports, props, styleDefault) {
	const { API, consola } = imports

	props.handleDelete = async (scriptName) => {
		try {
			props.onClose()
			API.Notifier.initial("Deleting script.", true)
			try {
				await API.Scripts.deleteScript(scriptName)
				API.Notifier.closeNotifications()
				API.Notifier.success("Done. Refreshing scripts.")
			} catch (e) {
				API.Notifier.closeNotifications()
				API.Notifier.error(e)
			}
			props.refresh()
		} catch (e) {
			consola.error(e)
		}
	}
	return props
}
