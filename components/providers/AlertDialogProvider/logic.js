export function logic(imports, props, styleDefault) {
  const { useState } = imports
  const [
    dialog,
    setDialog
  ] = useState({})

  function closeDialog() {
    setDialog({})
  }

  return { ...props,
    value: { dialog,
      setDialog,
      closeDialog } }
}
