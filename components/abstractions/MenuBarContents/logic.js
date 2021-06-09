export function logic(imports, props, styleDefault) {
  const { Settings, useState, useEffect } = imports

  const [
    MenuListItems,
    setMenuListItems
  ] = useState(null)

  useEffect(async () => {
    const coreSettings = await Settings.Core()

    setMenuListItems(coreSettings.menuListItems)
  }, [])

  props.MenuListItems = MenuListItems

  return props
}
