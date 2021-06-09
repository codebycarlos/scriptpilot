export function logic(imports, props, styleDefault) {
  const { useScriptsContext } = imports
  const { refreshScripts } = useScriptsContext()

  props.handleRefresh = refreshScripts
  console.log("🚀 --------------------------------------------------------------------")
  console.log("🚀 ~ file: logic.js ~ line 6 ~ logic ~ refreshScripts", refreshScripts)
  console.log("🚀 --------------------------------------------------------------------")

  return props
}
