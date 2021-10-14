export function logic(imports, props, styleDefault) {
	const { Settings, useState, useEffect } = imports

	const [MenuListItems, setMenuListItems] = useState(null)

	useEffect(async () => {
		const CoreAsyncSettings = await Settings.CoreAsync()

		setMenuListItems(CoreAsyncSettings.menuListItems)
	}, [])

	props.MenuListItems = MenuListItems

	return props
}
