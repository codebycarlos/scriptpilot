export function logic(imports, props, styleDefault) {
  const { useMediaQuery, breakpoint, MenuPanel, MenuBar } = imports
  const largeScreen = useMediaQuery(`(min-width:${breakpoint.variable_breakpoint_S}) and (hover:hover)`)

  props.MenuToDisplay = largeScreen
    ? MenuPanel
    : MenuBar

  return props
}
