export function logic(imports, props, styleDefault) {
  const { useNotifications, useScriptsContext } = imports
  const { deleteScript, refreshScripts } = useScriptsContext()
  const { AlertDialog } = useNotifications()

  async function deleteScriptsAndRefreshRequest(scriptName) {
    props.onClose()
    await deleteScript(scriptName)
    await refreshScripts()
  }

  props.handleDelete = async (scriptName) => {
    const title = `Delete script ${scriptName}?`
    const contentText = 'Deleting a script permanently removes the script\'s code.'
    const actions = [
      { label: 'Cancel',
        onClick: () => AlertDialog.closeDialog() },
      {
        label: 'Delete',
        onClick: () => {
          deleteScriptsAndRefreshRequest(scriptName)
          closeDialog()
        }
      }
    ]

    AlertDialog.setDialog({ title,
      contentText,
      actions })
  }

  return props
}
