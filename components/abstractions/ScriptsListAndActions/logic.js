export function logic(imports, props, styleDefault) {
  const { useScriptsContext } = imports
  const { refreshScriptsAsync } = useScriptsContext()

  props.handleRefresh = async () => await refreshScriptsAsync()

  return props
}
