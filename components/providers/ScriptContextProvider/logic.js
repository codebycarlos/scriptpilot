export function logic(imports, props, styleDefault) {
  const { useState, useEffect, API, useNotifications } = imports
  const { Log } = useNotifications()
  const [
    Script,
    setScript
  ] = useState(props.Script)
  const [
    error,
    setError
  ] = useState(null)
  const [
    refreshScriptRequested,
    setRefreshScriptRequested
  ] = useState(false)
  const refreshRate = 2 * 60 * 1000 // Minutes Seconds Milliseconds

  async function refreshScript() {
    setRefreshScriptRequested(true)
    try {
      const ScriptAPI = await API.Script()

      setScript(await ScriptAPI.getScript())
      setError(null)
    } catch (e) {
      Log.error(e)
      if (e.response && e.response.statusText) {
        return setError(e.response.statusText)
      }
      setError('Request for Script failed')
    } finally {
      setRefreshScriptRequested(false)
    }
  }

  // Start interval timer to request refreshing of Script
  useEffect(() => {
    const interval = setInterval(() => {
      if (!refreshScriptRequested) {
        refreshScript()
      }
    }, refreshRate)

    return () => clearInterval(interval)
  }, [])

  return { ...props,
    value: { Script,
      refreshScript,
      error } }
}
