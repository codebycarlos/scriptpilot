export function logic(imports, props, styleDefault) {
  const { useMediaQuery, breakpoint } = imports
  const largeScreen = useMediaQuery(`(min-width:${breakpoint.variable_breakpoint_S}) and (hover:hover)`)

  props.flexDirection = largeScreen
    ? 'row'
    : 'column'
  props.order = largeScreen
    ? 0
    : -1

  return props
}
